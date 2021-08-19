import { useRouter } from "next/router";
import { useEffect } from "react";
import storage from "../../lib/services/storage";

export function useLoginState() {
  const router = useRouter();

  useEffect(() => {
    if (!storage.token) {
      router.push("/login", undefined, { shallow: true });
    }
    console.log(storage.role);
    if (!!storage.role) {
      router.push(`/dashboard/${storage.role}`, undefined, { shallow: true });
    }
  }, []);

  return storage.userInfo;
}

export function useUserRole() {
  const router = useRouter();

  return storage.role || router.pathname.split("/")[2]; // 2: path name start with a slash; e.g.: '/d/a' --split--> ['','d',a'];
}
