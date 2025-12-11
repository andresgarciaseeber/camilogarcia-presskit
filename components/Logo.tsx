import React from 'react';

export const Logo: React.FC = () => {
  return (
    <svg
      viewBox="0 0 850 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      style={{ maxHeight: '40vh' }}
      preserveAspectRatio="xMinYMin meet"
    >
      <defs>
        {/* Patrón con líneas orgánicas tipo cebra - más líneas, más finas, onduladas */}
        <pattern id="zebraTexture" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
          {/* Fondo blanco */}
          <rect x="0" y="0" width="180" height="180" fill="#fff"/>

          {/* 6 líneas negras finas con curvas pronunciadas e irregulares */}
          <path d="M0,20 C25,15 40,28 60,22 C82,16 95,30 115,24 C138,18 155,26 180,21 L180,28 C155,33 138,25 115,31 C95,37 82,28 60,34 C40,40 25,30 0,35 Z" fill="#000"/>
          <path d="M0,48 C30,43 48,55 70,49 C92,43 108,56 130,50 C152,44 165,52 180,47 L180,54 C165,59 152,51 130,57 C108,63 92,54 70,60 C48,66 30,57 0,62 Z" fill="#000"/>
          <path d="M0,76 C22,70 38,84 58,78 C80,72 98,86 118,80 C140,74 158,82 180,76 L180,83 C158,89 140,81 118,87 C98,93 80,84 58,90 C38,96 22,87 0,93 Z" fill="#000"/>
          <path d="M0,104 C28,98 45,112 67,106 C87,100 102,114 123,108 C145,102 158,110 180,104 L180,111 C158,117 145,109 123,115 C102,121 87,112 67,118 C45,124 28,115 0,121 Z" fill="#000"/>
          <path d="M0,132 C25,126 40,140 60,134 C82,128 95,142 115,136 C138,130 155,138 180,132 L180,139 C155,145 138,137 115,143 C95,149 82,140 60,146 C40,152 25,143 0,149 Z" fill="#000"/>
          <path d="M0,160 C30,154 48,168 70,162 C92,156 108,170 130,164 C152,158 165,166 180,160 L180,167 C165,173 152,165 130,171 C108,177 92,168 70,174 C48,180 30,171 0,177 Z" fill="#000"/>
        </pattern>

        {/* Versión para impresión */}
        <pattern id="zebraTexturePrint" x="0" y="0" width="170" height="170" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
          <rect x="0" y="0" width="170" height="170" fill="#fff"/>
          <path d="M0,19 C23,14 38,27 57,21 C77,15 90,28 110,22 C132,16 148,24 170,19 L170,26 C148,31 132,23 110,29 C90,35 77,26 57,32 C38,38 23,29 0,34 Z" fill="#000"/>
          <path d="M0,45 C28,40 45,52 67,46 C87,40 102,53 123,47 C145,41 158,49 170,44 L170,51 C158,56 145,48 123,54 C102,60 87,51 67,57 C45,63 28,54 0,59 Z" fill="#000"/>
          <path d="M0,71 C20,65 36,79 55,73 C76,67 93,81 112,75 C133,69 151,77 170,71 L170,78 C151,84 133,76 112,82 C93,88 76,79 55,85 C36,91 20,82 0,88 Z" fill="#000"/>
          <path d="M0,97 C28,91 45,105 67,99 C87,93 102,107 123,101 C145,95 158,103 170,97 L170,104 C158,110 145,102 123,108 C102,114 87,105 67,111 C45,117 28,108 0,114 Z" fill="#000"/>
          <path d="M0,123 C23,117 38,131 57,125 C77,119 90,133 110,127 C132,121 148,129 170,123 L170,130 C148,136 132,128 110,134 C90,140 77,131 57,137 C38,143 23,134 0,140 Z" fill="#000"/>
          <path d="M0,149 C28,143 45,157 67,151 C87,145 102,159 123,153 C145,147 158,155 170,149 L170,156 C158,162 145,154 123,160 C102,166 87,157 67,163 C45,169 28,160 0,166 Z" fill="#000"/>
        </pattern>
      </defs>

      {/* CAMILO - alineado a la izquierda, sin inclinación */}
      <text
        x="0"
        y="90"
        textAnchor="start"
        fontSize="100"
        fontWeight="600"
        fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="-0.03em"
        fill="url(#zebraTexture)"
        className="logo-text print:fill-[url(#zebraTexturePrint)]"
      >
        CAMILO
      </text>

      {/* GARCIA - alineado a la izquierda, sin inclinación */}
      <text
        x="0"
        y="190"
        textAnchor="start"
        fontSize="100"
        fontWeight="600"
        fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="-0.03em"
        fill="url(#zebraTexture)"
        className="logo-text print:fill-[url(#zebraTexturePrint)]"
      >
        GARCIA
      </text>

      <style>{`
        @media print {
          .logo-text {
            fill: url(#zebraTexturePrint) !important;
          }
        }
      `}</style>
    </svg>
  );
};
