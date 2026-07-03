import { useState, useEffect } from "react";

interface CfdiSearchResult {
  uuid: string;
  rfc: string;
  total: number;
}

interface UseCfdiSearchResult {
  data: CfdiSearchResult[] | null;
  loading: boolean;
  error: string | null;
}

export function useCfdiSearch(searchTerm: string): UseCfdiSearchResult {
  // implementar juntos
}
