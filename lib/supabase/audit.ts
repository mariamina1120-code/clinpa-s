/**
 * HIPAA Audit Logging
 * Writes to audit_log table on every PHI read/write/delete.
 * Call this from server actions and API routes only.
 */
import { createServiceClient } from "./server";

export type AuditAction = "read" | "create" | "update" | "delete";

export async function writeAuditLog({
  userId,
  action,
  tableName,
  recordId,
  ipAddress,
}: {
  userId: string;
  action: AuditAction;
  tableName: string;
  recordId?: string;
  ipAddress?: string;
}) {
  const supabase = createServiceClient();
  const { error } = await supabase.from("audit_log").insert({
    user_id: userId,
    action,
    table_name: tableName,
    record_id: recordId ?? null,
    ip_address: ipAddress ?? null,
  });

  if (error) {
    // Log to server console only — never expose to client
    console.error("[AuditLog] Failed to write audit entry:", error.message);
  }
}
