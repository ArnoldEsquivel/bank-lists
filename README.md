# Productos AI - Frontend _v-2.0_

> ###### Para visualizar correctamente este documento es recomendable instalar la libreria [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced), una vez instalada ejecuta el atajo **"ctrl + shift + v"** o **"cmd + shift + v"** para visualizarlo.

###### Este es el frontend de la palataforma, las principales tecnologias son React, Typescript, SASS, Vite y framer-motion.

###### Con el fin de optimizar la lectura y optimizacion futura en el proyecto, seguiremos las mejores prácticas de desarrollo de software y trataremos de adherirnos en la medida de lo posible a los principios de diseño limpio (Clean Architecture).

###### Nuestro objetivo es crear un código claro, mantenible y escalable que cumpla con los estándares más altos de calidad.

&nbsp;

-   ### Principio de 3

###### Una de las buenas prácticas fundamentales que aplicaremos en nuestro proyecto es el "Principio de 3". Este principio establece que cuando nos enfrentamos a situaciones como pasar más de 3 propiedades a un componente, más de 3 clases a un objeto, o más de 3 atributos a una etiqueta HTML, debemos seguir las siguientes pautas:

&nbsp;

#### 1. Pasar Propiedades como un Objeto

###### En lugar de pasar múltiples props individuales a un componente, agrupamos estas propiedades en un objeto. Esto mejora la legibilidad y el mantenimiento del código.

```tsx
const exampleComponent = ({ objeto }) => {
	const { prop1, prop2, prop3, prop4 } = objeto
}
```

&nbsp;

#### 2. Dividir clases en varias liveas

###### Cuando aplicamos múltiples clases a un elemento HTML, aseguramos que cada clase esté en una línea separada para facilitar la legibilidad y futuras modificaciones.

```tsx
   <div
      className={`
         ${style["select-container"]}
         ${!open && style["select-container-close"]}
         ${active === 0 && style["select-container-active"]}
      `}
   >
      {...rest of component}
   </div>
```

&nbsp;

#### 3. Atributos en columna

###### Cuando tenemos más de 3 atributos en una etiqueta HTML, colocamos cada atributo en una línea separada, en lugar de tenerlos en la misma fila. Esto hace que el código sea más ordenado y fácil de mantener.

```tsx
<button type='submit' disabled onClick={handleSubmit}>
	Enviar
</button>
```

---

-   ### Estilos modulares con SCSS

###### Cada componente debera tener su archivo individual de scss para aplicar los estilos. Estas archivos deberan crearse e importarse como modulos de scss para optimizar la aplicacion de los estilos evitando que estos puedan chocar en algun momento, esto ya que al importarlos como modulos y aplicarlos a los componentes son hasheados automaticamente.
