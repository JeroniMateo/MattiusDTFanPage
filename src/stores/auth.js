import { defineStore } from 'pinia';
import { supabase } from '@/lib/supabase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    // Escuchar cambios en la sesión (Login, Logout, Registro)
    initialize() {
      // Obtener sesión actual al cargar
      supabase.auth.getSession().then(({ data: { session } }) => {
        this.user = session?.user ?? null;
      });

      // Escuchar cambios en tiempo real
      supabase.auth.onAuthStateChange((_event, session) => {
        this.user = session?.user ?? null;
      });
    },

    // Función para Iniciar Sesión
    async signIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      this.user = data.user;
    },

    // Función para Registrarse
    async signUp(email, password, metadata) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata // Aquí guardamos el username, teléfono, etc.
        }
      });
      if (error) throw error;
      this.user = data.user;
    },

    // Cerrar Sesión
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
    },
  },
});