export function FixDate(fechaEnFormatoLargo) {
	// Mapeo de nombres de meses en español a números de meses
	const meses = {
		enero: 0,
		febrero: 1,
		marzo: 2,
		abril: 3,
		mayo: 4,
		junio: 5,
		julio: 6,
		agosto: 7,
		septiembre: 8,
		octubre: 9,
		noviembre: 10,
		diciembre: 11,
	}

	// Dividir la cadena de fecha en palabras
	const palabras = fechaEnFormatoLargo.split(' ')

	// Obtener el día y el año
	const dia = parseInt(palabras[0], 10)
	const año = parseInt(palabras[palabras.length - 1], 10)

	// Obtener el número de mes utilizando el mapeo
	const mes = meses[palabras[2].toLowerCase()]

	// Crear un objeto de fecha
	const nuevaFecha = new Date(año, mes, dia)

	// Obtener la fecha en formato yyyy-mm-dd
	const fechaFormateada = nuevaFecha.toISOString().split('T')[0]

	return fechaFormateada
}
