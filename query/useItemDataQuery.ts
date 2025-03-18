// src/query/useDataQuery.ts

import { fetchItemList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

export const useItemDataQuery = () => {
    return useQuery({
        queryKey: ["items"],
        queryFn: fetchItemList,
    });
}