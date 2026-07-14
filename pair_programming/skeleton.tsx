// REQUERIMIENTOS
// - Maneja los tres estados: `loading`, `error`, `data`
// - Si el término de búsqueda está vacío, no dispara ninguna búsqueda
// - Dispara la búsqueda con **debounce** de 300ms después de que el usuario deja de escribir (no en cada tecla)
// - Si el usuario sigue escribiendo, **cancela** la búsqueda anterior en curso (para no procesar ni mostrar una respuesta que ya no corresponde a lo que hay en el input)
// - Limpia correctamente los timers/requests pendientes si el componente se desmonta

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
