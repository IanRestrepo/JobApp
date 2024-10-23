---
title: Senior Software Engineer
company: Baru
tags: 
- Astro
- React
- Tailwind css
salary: 200,000
isRemote: true
---
## Descripcion del trabajo

Buscamos un **Senior Software Engineer** apasionado y altamente calificado para unirse a nuestro equipo en Baru. El candidato ideal tendra experiencia en el desarrollo de aplicaciones utilizando **Astro**, **Tailwind CSS**, **AstroDB**, **JavaScript** y **SQLite**. El puesto implica colaborar con equipos multidisciplinarios para disenar, desarrollar e implementar soluciones innovadoras y eficientes.

## Responsabilidades

- Desarrollar y mantener aplicaciones web utilizando **Astro** y **JavaScript**.
- Implementar interfaces de usuario responsivas y modernas con **Tailwind CSS**.
- Disenar y administrar bases de datos utilizando **SQLite** y **AstroDB**.
- Colaborar con otros ingenieros y disenadores para garantizar la calidad y la funcionalidad del software.
- Participar en revisiones de codigo y brindar orientacion a ingenieros mas junior.
- Mantenerse actualizado con las ultimas tendencias y tecnologias en desarrollo de software.

## Requisitos

- **Experiencia minima:** 5 anos en desarrollo de software.
- Dominio de **Astro**, **Tailwind CSS**, **AstroDB**, **JavaScript** y **SQLite**.
- Experiencia en desarrollo de aplicaciones web modernas y escalables.
- Conocimiento en mejores practicas de desarrollo, pruebas y despliegue.
- Habilidades de comunicacion efectiva y trabajo en equipo.
- Titulo en Ciencias de la Computacion o campo relacionado (preferible).

```javascript
function isValidCreditCard(cardNumber) {
    // Eliminar espacios y guiones del numero de tarjeta
    cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');

    // Comprobar si el numero es valido (solo digitos)
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    let sum = 0;
    const len = cardNumber.length;
    const parity = len % 2; // Determina si el indice de posicion es par o impar

    // Recorrer cada digito de derecha a izquierda
    for (let i = 0; i < len; i++) {
        let digit = parseInt(cardNumber.charAt(i));

        // Si el indice es impar segun la longitud del numero
        if (i % 2 === parity) {
            digit *= 2; // Duplicar el digito
            if (digit > 9) {
                digit -= 9; // Restar 9 si es mayor a 9
            }
        }
        sum += digit; // Sumar el digito (o el digito modificado)
    }

    // La tarjeta es valida si la suma es un multiplo de 10
    return sum % 10 === 0;
}

// Ejemplo de uso:
const cardNumber1 = "4532 1488 0343 6467"; // Tarjeta valida
const cardNumber2 = "4532 1488 0343 6468"; // Tarjeta no valida

console.log(`La tarjeta ${cardNumber1} es valida: ${isValidCreditCard(cardNumber1)}`);
console.log(`La tarjeta ${cardNumber2} es valida: ${isValidCreditCard(cardNumber2)}`);

```

## Beneficios

- Salario competitivo (rango de **$70,000 a $90,000 USD anuales**, dependiendo de la experiencia).
- Horario flexible y opcion de trabajo remoto.
- Oportunidades de desarrollo profesional y capacitacion continua.
- Seguro medico y dental.
- Vacaciones pagadas y dias de enfermedad.
- Ambiente de trabajo colaborativo y dinamico.

## Como aplicar

Si estas interesado en esta oportunidad, por favor envia tu CV y una carta de presentacion a [correo@baru.com](mailto:correo@baru.com) con el asunto "Senior Software Engineer Application".

---

¡Esperamos tu postulacion para unirte a nuestro equipo en Baru!
