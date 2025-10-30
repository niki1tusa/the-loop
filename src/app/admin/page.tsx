import { createAdminClient } from "@/src/utils/supabase/admin";

export default function Page() {
  async function seedAction() {
    'use server';
    const supabase = createAdminClient();
    const { error } = await supabase.auth.admin.createUser({
      email: 'niki2ta00n4@gmail.com',
      password: '123456',
      email_confirm: true,
    });
    if (error) throw new Error(error.message);
  }

  return (
    <form action={seedAction}>
      <button type="submit" className="bg-secondary border p-5 text-2xl">seed</button>
    </form>
  );
}