export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: string
          id: string
          meta_json: Json | null
          module: string
          role: Database["public"]["Enums"]["app_role"] | null
          timestamp: string
          user_id: string | null
        }
        Insert: {
          action: string
          id?: string
          meta_json?: Json | null
          module: string
          role?: Database["public"]["Enums"]["app_role"] | null
          timestamp?: string
          user_id?: string | null
        }
        Update: {
          action?: string
          id?: string
          meta_json?: Json | null
          module?: string
          role?: Database["public"]["Enums"]["app_role"] | null
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      blackbox_events: {
        Row: {
          created_at: string
          device_fingerprint: string | null
          entity_id: string | null
          entity_type: string | null
          event_type: string
          geo_location: string | null
          id: string
          ip_address: string | null
          is_sealed: boolean
          metadata: Json | null
          module_name: string
          risk_score: number | null
          role_name: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          device_fingerprint?: string | null
          entity_id?: string | null
          entity_type?: string | null
          event_type: string
          geo_location?: string | null
          id?: string
          ip_address?: string | null
          is_sealed?: boolean
          metadata?: Json | null
          module_name: string
          risk_score?: number | null
          role_name?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          device_fingerprint?: string | null
          entity_id?: string | null
          entity_type?: string | null
          event_type?: string
          geo_location?: string | null
          id?: string
          ip_address?: string | null
          is_sealed?: boolean
          metadata?: Json | null
          module_name?: string
          risk_score?: number | null
          role_name?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      quick_support_requests: {
        Row: {
          ai_suggested_solution: string | null
          assigned_to: string | null
          attachments: Json | null
          created_at: string
          description: string
          id: string
          priority: string | null
          request_type: string | null
          resolution_notes: string | null
          resolved_at: string | null
          response_time_minutes: number | null
          status: string | null
          subject: string
          updated_at: string
          user_email: string | null
          user_id: string | null
          user_name: string | null
        }
        Insert: {
          ai_suggested_solution?: string | null
          assigned_to?: string | null
          attachments?: Json | null
          created_at?: string
          description: string
          id?: string
          priority?: string | null
          request_type?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          response_time_minutes?: number | null
          status?: string | null
          subject: string
          updated_at?: string
          user_email?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Update: {
          ai_suggested_solution?: string | null
          assigned_to?: string | null
          attachments?: Json | null
          created_at?: string
          description?: string
          id?: string
          priority?: string | null
          request_type?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          response_time_minutes?: number | null
          status?: string | null
          subject?: string
          updated_at?: string
          user_email?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      safe_assist_ai_logs: {
        Row: {
          action_recommended: string | null
          action_taken: string | null
          ai_analysis: Json | null
          auto_handled: boolean | null
          event_type: string
          id: string
          risk_level: string | null
          session_id: string | null
          timestamp: string
        }
        Insert: {
          action_recommended?: string | null
          action_taken?: string | null
          ai_analysis?: Json | null
          auto_handled?: boolean | null
          event_type: string
          id?: string
          risk_level?: string | null
          session_id?: string | null
          timestamp?: string
        }
        Update: {
          action_recommended?: string | null
          action_taken?: string | null
          ai_analysis?: Json | null
          auto_handled?: boolean | null
          event_type?: string
          id?: string
          risk_level?: string | null
          session_id?: string | null
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "safe_assist_ai_logs_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "safe_assist_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      safe_assist_alerts: {
        Row: {
          alert_type: string
          created_at: string
          id: string
          message: string
          recipients: string[]
          session_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string
          id?: string
          message: string
          recipients?: string[]
          session_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string
          id?: string
          message?: string
          recipients?: string[]
          session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "safe_assist_alerts_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "safe_assist_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      safe_assist_events: {
        Row: {
          actor_type: string
          event_data: Json
          event_type: string
          id: string
          session_id: string
          timestamp: string
        }
        Insert: {
          actor_type: string
          event_data?: Json
          event_type: string
          id?: string
          session_id: string
          timestamp?: string
        }
        Update: {
          actor_type?: string
          event_data?: Json
          event_type?: string
          id?: string
          session_id?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "safe_assist_events_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "safe_assist_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      safe_assist_notifications: {
        Row: {
          created_at: string
          id: string
          message: string | null
          notification_type: string
          read_at: string | null
          session_id: string | null
          severity: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          notification_type: string
          read_at?: string | null
          session_id?: string | null
          severity?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          notification_type?: string
          read_at?: string | null
          session_id?: string | null
          severity?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "safe_assist_notifications_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "safe_assist_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      safe_assist_sessions: {
        Row: {
          agent_device_fingerprint: string | null
          agent_entered_user_code: string | null
          agent_ip_address: string | null
          agent_masked_id: string | null
          agent_verification_code: string | null
          agent_watermark_text: string | null
          ai_flags: Json | null
          ai_monitoring_enabled: boolean | null
          ai_risk_score: number | null
          client_notified_at: string | null
          created_at: string
          dual_verified: boolean | null
          end_reason: string | null
          ended_at: string | null
          ended_by: string | null
          expires_at: string
          id: string
          is_recording_enabled: boolean
          max_duration_minutes: number
          mode: Database["public"]["Enums"]["remote_assist_mode"]
          recording_url: string | null
          session_code: string
          started_at: string | null
          status: Database["public"]["Enums"]["remote_assist_status"]
          support_agent_id: string | null
          support_agent_role: Database["public"]["Enums"]["app_role"] | null
          user_consent_at: string | null
          user_consent_given: boolean
          user_device_fingerprint: string | null
          user_entered_agent_code: string | null
          user_id: string
          user_ip_address: string | null
          user_role: Database["public"]["Enums"]["app_role"] | null
          user_verification_code: string | null
        }
        Insert: {
          agent_device_fingerprint?: string | null
          agent_entered_user_code?: string | null
          agent_ip_address?: string | null
          agent_masked_id?: string | null
          agent_verification_code?: string | null
          agent_watermark_text?: string | null
          ai_flags?: Json | null
          ai_monitoring_enabled?: boolean | null
          ai_risk_score?: number | null
          client_notified_at?: string | null
          created_at?: string
          dual_verified?: boolean | null
          end_reason?: string | null
          ended_at?: string | null
          ended_by?: string | null
          expires_at?: string
          id?: string
          is_recording_enabled?: boolean
          max_duration_minutes?: number
          mode?: Database["public"]["Enums"]["remote_assist_mode"]
          recording_url?: string | null
          session_code: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["remote_assist_status"]
          support_agent_id?: string | null
          support_agent_role?: Database["public"]["Enums"]["app_role"] | null
          user_consent_at?: string | null
          user_consent_given?: boolean
          user_device_fingerprint?: string | null
          user_entered_agent_code?: string | null
          user_id: string
          user_ip_address?: string | null
          user_role?: Database["public"]["Enums"]["app_role"] | null
          user_verification_code?: string | null
        }
        Update: {
          agent_device_fingerprint?: string | null
          agent_entered_user_code?: string | null
          agent_ip_address?: string | null
          agent_masked_id?: string | null
          agent_verification_code?: string | null
          agent_watermark_text?: string | null
          ai_flags?: Json | null
          ai_monitoring_enabled?: boolean | null
          ai_risk_score?: number | null
          client_notified_at?: string | null
          created_at?: string
          dual_verified?: boolean | null
          end_reason?: string | null
          ended_at?: string | null
          ended_by?: string | null
          expires_at?: string
          id?: string
          is_recording_enabled?: boolean
          max_duration_minutes?: number
          mode?: Database["public"]["Enums"]["remote_assist_mode"]
          recording_url?: string | null
          session_code?: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["remote_assist_status"]
          support_agent_id?: string | null
          support_agent_role?: Database["public"]["Enums"]["app_role"] | null
          user_consent_at?: string | null
          user_consent_given?: boolean
          user_device_fingerprint?: string | null
          user_entered_agent_code?: string | null
          user_id?: string
          user_ip_address?: string | null
          user_role?: Database["public"]["Enums"]["app_role"] | null
          user_verification_code?: string | null
        }
        Relationships: []
      }
      user_notifications: {
        Row: {
          action_label: string | null
          action_url: string | null
          created_at: string
          dismissed_at: string | null
          event_type: string | null
          id: string
          is_buzzer: boolean | null
          is_dismissed: boolean | null
          is_read: boolean | null
          message: string
          read_at: string | null
          role_target: string[] | null
          type: string
          user_id: string
        }
        Insert: {
          action_label?: string | null
          action_url?: string | null
          created_at?: string
          dismissed_at?: string | null
          event_type?: string | null
          id?: string
          is_buzzer?: boolean | null
          is_dismissed?: boolean | null
          is_read?: boolean | null
          message: string
          read_at?: string | null
          role_target?: string[] | null
          type: string
          user_id: string
        }
        Update: {
          action_label?: string | null
          action_url?: string | null
          created_at?: string
          dismissed_at?: string | null
          event_type?: string | null
          id?: string
          is_buzzer?: boolean | null
          is_dismissed?: boolean | null
          is_read?: boolean | null
          message?: string
          read_at?: string | null
          role_target?: string[] | null
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_remote_assist_session: { Args: never; Returns: Json }
      end_remote_assist_session: {
        Args: { p_reason?: string; p_session_id: string }
        Returns: Json
      }
      generate_session_code: { Args: never; Returns: string }
      generate_verification_code: { Args: never; Returns: string }
      give_remote_assist_consent: {
        Args: { p_session_id: string }
        Returns: Json
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_support_staff: { Args: { _user_id: string }; Returns: boolean }
      join_remote_assist_session: {
        Args: { p_session_code: string }
        Returns: Json
      }
      log_safe_assist_ai_event: {
        Args: {
          p_analysis: Json
          p_auto_handle?: boolean
          p_event_type: string
          p_recommended_action: string
          p_risk_level: string
          p_session_id: string
        }
        Returns: string
      }
      verify_safe_assist_connection: {
        Args: {
          p_agent_code: string
          p_is_agent: boolean
          p_session_id: string
          p_user_code: string
        }
        Returns: Json
      }
    }
    Enums: {
      app_role:
        | "boss_owner"
        | "super_admin"
        | "admin"
        | "sales_support_manager"
        | "sales"
        | "support"
        | "client"
        | "customer"
      remote_assist_mode: "view_only" | "guided_cursor"
      remote_assist_status:
        | "pending"
        | "connected"
        | "active"
        | "ended"
        | "expired"
        | "cancelled"
        | "terminated"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "boss_owner",
        "super_admin",
        "admin",
        "sales_support_manager",
        "sales",
        "support",
        "client",
        "customer",
      ],
      remote_assist_mode: ["view_only", "guided_cursor"],
      remote_assist_status: [
        "pending",
        "connected",
        "active",
        "ended",
        "expired",
        "cancelled",
        "terminated",
      ],
    },
  },
} as const
