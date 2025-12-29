import { supabase } from "@/lib/supabase";

export async function getProducts() {
  try {
    const { data, error } = await supabase
      .storage
      .listBuckets()
    if (error) {
      return {
        ok: false as const,
        status: 500,
        message: `Catalog Id Error: ${error}`
      };
    }

    return {
      ok: true as const,
      status: 200 as const,
      data
    };
  } catch (err: any) {
    console.error(err);
    return {
      ok: false as const,
      status: 500,
      message: `Error: ${err?.message ?? "unknown error"}`
    };
  }
};
