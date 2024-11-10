<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reproductor de Video</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
            overflow: hidden; /* Evitar scroll si el contenido es más grande */
        }

        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            padding: 20px;
            max-width: 800px;
            width: 100%;
            opacity: 0; /* Inicialmente oculto para la animación */
            transform: translateY(20px); /* Desplazado hacia abajo para la animación */
            animation: fadeInUp 0.5s forwards; /* Animación de entrada */
            transition: box-shadow 0.3s ease;
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0); /* Regresar a la posición original */
            }
        }

        .container:hover {
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
            font-weight: 500;
            color: #6200ea; /* Color primario de Material Design */
            opacity: 0; /* Inicialmente oculto para la animación */
            transform: translateY(-20px); /* Desplazado hacia arriba para la animación */
            animation: titleFadeIn 0.6s forwards; /* Animación de entrada para el título */
            transition: transform 0.3s ease; /* Transición para el efecto hover */
        }

        @keyframes titleFadeIn {
            to {
                opacity: 1;
                transform: translateY(0); /* Regresar a la posición original */
            }
        }

        h1:hover {
            transform: translateY(-5px); /* Movimiento hacia arriba al pasar el mouse */
        }

        iframe {
            width: 100%;
            height: 450px;
            border: none;
            border-radius: 8px;
            transition: transform 0.3s ease, filter 0.3s ease;
        }

        iframe:hover {
            transform: scale(1.02);
            filter: brightness(1.05); /* Aumentar el brillo al pasar el mouse */
        }

        @media (max-width: 600px) {
            iframe {
                height: 300px; /* Ajustar la altura en pantallas más pequeñas */
            }
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Ver: Mi Pobre Angelito 2</h1>
    <iframe src="https://drive.google.com/file/d/1h0x7gjUb6qJn3C6nVn-h-vSo_Fsabm_-/preview" allow="autoplay"></iframe>
</div>

</body>
</html>