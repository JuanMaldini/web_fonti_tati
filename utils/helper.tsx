// Este archivo ahora solo contiene funciones de utilidad, no datos
// Las declaraciones de datos se han movido a archivos específicos en la carpeta data

// Función de ejemplo para formatear fechas
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

// Función de ejemplo para truncar texto
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

// Otras funciones de utilidad que puedas necesitar

