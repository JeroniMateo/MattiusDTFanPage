import { defineStore } from 'pinia';
import { supabase } from '@/lib/supabase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    profile: null,
  }),
  getters: {
    // Esto devolverá el email del perfil si existe, o el del usuario auth
    userEmail: (state) => state.profile?.email || state.user?.email,
    // Útil para el Navbar
    displayName: (state) => state.profile?.username || state.user?.email?.split('@')[0]
  },
  actions: {
    async initialize() {
      const { data: { session } } = await supabase.auth.getSession();
      this.user = session?.user ?? null;
      if (this.user) await this.fetchProfile();

      // Escuchar cambios (login/logout)
      supabase.auth.onAuthStateChange(async (event, session) => {
        this.user = session?.user ?? null;
        if (this.user) {
          await this.fetchProfile();
        } else {
          this.profile = null;
        }
      });
    },

    async fetchProfile() {
      if (!this.user) return;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', this.user.id)
        .single();
      
      if (!error) this.profile = data;
    },

    async signUp(email, password, metadata) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata 
        }
      });
      if (error) throw error;
      
      this.user = data.user;
      // Opcional: Llenamos el perfil localmente para que la UI no parpadee
      this.profile = { id: data.user.id, email, ...metadata };
    },

    async signIn(email, password) {
      // Aplicamos .trim() para limpiar espacios al principio o al final del correo
      const cleanEmail = email ? email.trim() : ''; 
      
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email: cleanEmail, 
        password 
      });
      
      if (error) throw error;
      this.user = data.user;
      await this.fetchProfile();
    },

    // ¡Recuperamos el signOut que faltaba! 🚀
    async signOut() {
      await supabase.auth.signOut();
      this.user = null;
      this.profile = null;
    }
  }
});