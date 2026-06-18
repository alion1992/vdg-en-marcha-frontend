export class ValidacionesUtils {

  static validarDni(dni: string): string | null {

    if (!dni || dni.trim() === '') {
      return 'Debes introducir un DNI';
    }

    dni = dni.trim().toUpperCase();

    const regex = /^\d{8}[A-Z]$/;

    if (!regex.test(dni)) {
      return 'El formato del DNI no es válido';
    }

    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    const numero = parseInt(
      dni.substring(0, 8),
      10
    );

    const letra = dni.charAt(8);

    if (letras[numero % 23] !== letra) {
      return 'La letra del DNI no es correcta';
    }

    return null;
  }

}