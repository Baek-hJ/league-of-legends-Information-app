// src/query/useDataQuery.ts

import { fetchChampionList } from "@/utils/serverApi"
import { useQuery } from "@tanstack/react-query"

export const useDataQuery = () => {
    return useQuery({
        queryKey: ["champions"],
        queryFn: fetchChampionList,
    })
}