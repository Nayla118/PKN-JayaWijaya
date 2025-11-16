import React from 'react'

interface CategoryIconProps {
  type: 'food' | 'fashion' | 'arts' | 'work' | 'customs' | 'values'
  className?: string
}

export default function CategoryIcon({ type, className = '' }: CategoryIconProps) {
  const icons = {
    // Makanan: Mangkuk Papeda yang lebih realistis
    food: (
      <svg viewBox="0 0 120 120" className={className} fill="currentColor">
        {/* Shadow bawah */}
        <ellipse cx="60" cy="105" rx="40" ry="6" fill="#000" opacity="0.15"/>
        
        {/* Mangkuk keramik tradisional */}
        <defs>
          <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="50%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>
          <radialGradient id="foodGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFF8DC" />
            <stop offset="70%" stopColor="#F5DEB3" />
            <stop offset="100%" stopColor="#DEB887" />
          </radialGradient>
        </defs>
        
        {/* Body mangkuk */}
        <path d="M 20 60 Q 20 85 60 90 Q 100 85 100 60 L 20 60 Z" fill="url(#bowlGrad)"/>
        
        {/* Highlight mangkuk */}
        <path d="M 25 62 Q 25 70 35 73" stroke="#CD853F" strokeWidth="2" fill="none" opacity="0.6"/>
        
        {/* Bibir mangkuk */}
        <ellipse cx="60" cy="60" rx="40" ry="7" fill="#A0522D"/>
        <ellipse cx="60" cy="59" rx="40" ry="6" fill="#CD853F"/>
        <ellipse cx="60" cy="58" rx="38" ry="5" fill="#DEB887" opacity="0.8"/>
        
        {/* Papeda (tekstur lengket) */}
        <ellipse cx="60" cy="63" rx="35" ry="10" fill="url(#foodGrad)"/>
        <ellipse cx="60" cy="62" rx="33" ry="9" fill="#FFFACD" opacity="0.7"/>
        
        {/* Tekstur papeda */}
        <circle cx="50" cy="62" r="4" fill="#FFF" opacity="0.5"/>
        <circle cx="70" cy="64" r="3" fill="#FFF" opacity="0.5"/>
        <circle cx="60" cy="60" r="3.5" fill="#FFF" opacity="0.5"/>
        <circle cx="55" cy="65" r="2.5" fill="#FFF" opacity="0.4"/>
        
        {/* Sendok kayu */}
        <ellipse cx="95" cy="45" rx="6" ry="8" fill="#8B7355" transform="rotate(15 95 45)"/>
        <ellipse cx="95" cy="45" rx="5" ry="7" fill="#A0826D" opacity="0.7" transform="rotate(15 95 45)"/>
        <rect x="93" y="45" width="4" height="28" rx="2" fill="#8B7355" transform="rotate(15 93 45)"/>
        <rect x="93.5" y="45" width="3" height="28" rx="1.5" fill="#C4A777" opacity="0.5" transform="rotate(15 93 45)"/>
        
        {/* Uap panas realistis */}
        <g opacity="0.6">
          <path d="M 40 52 Q 38 45 40 38 Q 42 31 40 24" stroke="#E8F5E9" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M 60 50 Q 58 43 60 36 Q 62 29 60 22" stroke="#E8F5E9" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
          <path d="M 80 52 Q 78 45 80 38 Q 82 31 80 24" stroke="#E8F5E9" strokeWidth="3" strokeLinecap="round" fill="none"/>
        </g>
        
        {/* Motif tradisional di mangkuk */}
        <path d="M 25 70 Q 35 72 45 70 Q 55 68 65 70 Q 75 72 85 70 Q 90 68 95 70" 
              stroke="#4A2511" strokeWidth="1.5" opacity="0.4" fill="none"/>
      </svg>
    ),

    // Pakaian: Noken - tas anyaman tradisional Papua
    fashion: (
      <svg viewBox="0 0 120 120" className={className} fill="currentColor">
        <defs>
          <pattern id="weavePattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 0 4 L 8 4 M 4 0 L 4 8" stroke="#5D4037" strokeWidth="1.5" opacity="0.5"/>
          </pattern>
          <linearGradient id="nokenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8D6E63" />
            <stop offset="50%" stopColor="#6D4C41" />
            <stop offset="100%" stopColor="#5D4037" />
          </linearGradient>
        </defs>
        
        {/* Shadow */}
        <ellipse cx="60" cy="105" rx="35" ry="5" fill="#000" opacity="0.15"/>
        
        {/* Tali pegangan atas */}
        <path d="M 35 35 Q 30 20 35 15 Q 60 10 85 15 Q 90 20 85 35" 
              stroke="url(#nokenGrad)" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M 37 35 Q 32 22 37 17 Q 60 13 83 17 Q 88 22 83 35" 
              stroke="#A1887F" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
        
        {/* Body noken (mengembang di tengah) */}
        <path d="M 35 35 Q 25 60 30 85 Q 35 95 60 98 Q 85 95 90 85 Q 95 60 85 35 Z" 
              fill="url(#nokenGrad)"/>
        
        {/* Pola anyaman */}
        <path d="M 35 35 Q 25 60 30 85 Q 35 95 60 98 Q 85 95 90 85 Q 95 60 85 35 Z" 
              fill="url(#weavePattern)" opacity="0.6"/>
        
        {/* Garis anyaman horizontal */}
        <g stroke="#4A2511" strokeWidth="1.5" opacity="0.5" fill="none">
          <path d="M 36 42 Q 50 43 84 42"/>
          <path d="M 34 50 Q 50 52 86 50"/>
          <path d="M 32 58 Q 50 61 88 58"/>
          <path d="M 31 66 Q 50 70 89 66"/>
          <path d="M 32 74 Q 50 78 88 74"/>
          <path d="M 34 82 Q 50 86 86 82"/>
          <path d="M 38 90 Q 50 93 82 90"/>
        </g>
        
        {/* Garis anyaman vertikal */}
        <g stroke="#4A2511" strokeWidth="1.5" opacity="0.4" fill="none">
          <path d="M 40 35 Q 38 65 40 95"/>
          <path d="M 50 35 Q 48 67 50 96"/>
          <path d="M 60 35 Q 58 68 60 97"/>
          <path d="M 70 35 Q 72 67 70 96"/>
          <path d="M 80 35 Q 82 65 80 95"/>
        </g>
        
        {/* Highlight cahaya */}
        <ellipse cx="45" cy="50" rx="8" ry="15" fill="#BCAAA4" opacity="0.3"/>
        
        {/* Detail dekoratif */}
        <circle cx="45" cy="60" r="3" fill="#D7CCC8" opacity="0.8"/>
        <circle cx="75" cy="60" r="3" fill="#D7CCC8" opacity="0.8"/>
        <circle cx="60" cy="75" r="3" fill="#D7CCC8" opacity="0.8"/>
      </svg>
    ),

    // Kesenian: Tifa - alat musik tradisional Papua
    arts: (
      <svg viewBox="0 0 120 120" className={className} fill="currentColor">
        <defs>
          <linearGradient id="tifaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8D6E63" />
            <stop offset="50%" stopColor="#6D4C41" />
            <stop offset="100%" stopColor="#8D6E63" />
          </linearGradient>
          <radialGradient id="drumHead" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#D7CCC8" />
            <stop offset="70%" stopColor="#BCAAA4" />
            <stop offset="100%" stopColor="#A1887F" />
          </radialGradient>
        </defs>
        
        {/* Shadow */}
        <ellipse cx="55" cy="105" rx="30" ry="4" fill="#000" opacity="0.15"/>
        
        {/* Kepala drum atas */}
        <ellipse cx="55" cy="32" rx="28" ry="10" fill="#5D4037"/>
        <ellipse cx="55" cy="31" rx="28" ry="9" fill="url(#drumHead)"/>
        <ellipse cx="55" cy="31" rx="24" ry="7" fill="#E0E0E0" opacity="0.3"/>
        
        {/* Tali pengikat atas */}
        <circle cx="45" cy="31" r="2.5" fill="#4A2511"/>
        <circle cx="65" cy="31" r="2.5" fill="#4A2511"/>
        
        {/* Body drum kayu */}
        <rect x="27" y="32" width="56" height="55" fill="url(#tifaGrad)" rx="4"/>
        
        {/* Ukiran motif Papua */}
        <g stroke="#4A2511" strokeWidth="2" opacity="0.4" fill="none">
          <path d="M 35 40 L 40 75"/>
          <path d="M 45 38 L 45 77"/>
          <path d="M 55 38 L 55 77"/>
          <path d="M 65 38 L 65 77"/>
          <path d="M 75 40 L 70 75"/>
        </g>
        
        {/* Motif geometris tradisional */}
        <g fill="#D7CCC8" opacity="0.6">
          <circle cx="38" cy="50" r="4"/>
          <circle cx="72" cy="50" r="4"/>
          <rect x="53" y="56" width="4" height="8" rx="2"/>
          <polygon points="55,48 49,54 61,54"/>
          <polygon points="55,67 49,61 61,61"/>
        </g>
        
        {/* Tali pengikat bawah */}
        <circle cx="45" cy="87" r="2.5" fill="#4A2511"/>
        <circle cx="65" cy="87" r="2.5" fill="#4A2511"/>
        <path d="M 45 32 Q 43 60 45 87" stroke="#4A2511" strokeWidth="2" opacity="0.5" fill="none"/>
        <path d="M 65 32 Q 67 60 65 87" stroke="#4A2511" strokeWidth="2" opacity="0.5" fill="none"/>
        
        {/* Kepala drum bawah */}
        <ellipse cx="55" cy="87" rx="28" ry="10" fill="#4A2511"/>
        <ellipse cx="55" cy="87" rx="28" ry="9" fill="#5D4037"/>
        
        {/* Highlight */}
        <ellipse cx="42" cy="45" rx="6" ry="12" fill="#A1887F" opacity="0.3"/>
        
        {/* Stik drum */}
        <g transform="rotate(35 100 50)">
          <ellipse cx="100" cy="45" rx="4" ry="6" fill="#8D6E63"/>
          <rect x="98" y="45" width="4" height="30" fill="#6D4C41" rx="2"/>
          <ellipse cx="100" cy="45" rx="3" ry="5" fill="#BCAAA4" opacity="0.5"/>
        </g>
      </svg>
    ),

    // Pekerjaan: Pertanian tradisional di pegunungan
    work: (
      <svg viewBox="0 0 120 120" className={className} fill="currentColor">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#66BB6A" />
          </linearGradient>
          <linearGradient id="fieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8BC34A" />
            <stop offset="100%" stopColor="#689F38" />
          </linearGradient>
        </defs>
        
        {/* Langit/latar */}
        <rect x="10" y="20" width="100" height="70" fill="url(#skyGrad)" rx="8"/>
        
        {/* Gunung di belakang */}
        <path d="M 10 60 L 40 30 L 70 50 L 110 20 L 110 90 L 10 90 Z" fill="#4CAF50" opacity="0.5"/>
        <path d="M 20 65 L 50 40 L 80 55 L 110 35 L 110 90 L 20 90 Z" fill="#558B2F" opacity="0.6"/>
        
        {/* Sawah bertingkat (terasering) */}
        <path d="M 15 70 L 105 70 L 108 75 L 12 75 Z" fill="#7CB342"/>
        <path d="M 12 75 L 108 75 L 110 82 L 10 82 Z" fill="#689F38"/>
        <path d="M 10 82 L 110 82 L 110 90 L 10 90 Z" fill="#558B2F"/>
        
        {/* Tanaman ubi/keladi (umbi-umbian khas Papua) */}
        <g transform="translate(30, 63)">
          <ellipse cx="0" cy="8" rx="8" ry="4" fill="#4E342E" opacity="0.3"/>
          <path d="M -5 8 Q -8 3 -5 -2 Q -3 2 -5 8" fill="#66BB6A"/>
          <path d="M 0 8 Q -3 2 0 -5 Q 3 2 0 8" fill="#4CAF50"/>
          <path d="M 5 8 Q 8 3 5 -2 Q 3 2 5 8" fill="#66BB6A"/>
          <ellipse cx="0" cy="-3" rx="4" ry="6" fill="#81C784" opacity="0.6"/>
        </g>
        
        <g transform="translate(55, 68)">
          <ellipse cx="0" cy="6" rx="7" ry="3" fill="#4E342E" opacity="0.3"/>
          <path d="M -4 6 Q -7 2 -4 -2 Q -2 1 -4 6" fill="#66BB6A"/>
          <path d="M 0 6 Q -2 1 0 -4 Q 2 1 0 6" fill="#4CAF50"/>
          <path d="M 4 6 Q 7 2 4 -2 Q 2 1 4 6" fill="#66BB6A"/>
        </g>
        
        <g transform="translate(80, 65)">
          <ellipse cx="0" cy="7" rx="8" ry="4" fill="#4E342E" opacity="0.3"/>
          <path d="M -5 7 Q -8 3 -6 -1 Q -3 2 -5 7" fill="#81C784"/>
          <path d="M 0 7 Q -3 2 0 -4 Q 3 2 0 7" fill="#66BB6A"/>
          <path d="M 5 7 Q 8 3 6 -1 Q 3 2 5 7" fill="#81C784"/>
          <path d="M 0 -2 Q -4 -4 -6 -3" stroke="#4CAF50" strokeWidth="1.5" fill="none"/>
        </g>
        
        {/* Matahari */}
        <circle cx="25" cy="32" r="9" fill="#FFC107"/>
        <circle cx="25" cy="32" r="14" fill="#FFD54F" opacity="0.4"/>
        <g stroke="#FFA000" strokeWidth="2" opacity="0.6">
          <line x1="25" y1="18" x2="25" y2="14"/>
          <line x1="25" y1="50" x2="25" y2="46"/>
          <line x1="11" y1="32" x2="7" y2="32"/>
          <line x1="43" y1="32" x2="39" y2="32"/>
          <line x1="16" y1="21" x2="13" y2="18"/>
          <line x1="37" y1="43" x2="34" y2="40"/>
          <line x1="34" y1="21" x2="37" y2="18"/>
          <line x1="16" y1="43" x2="13" y2="46"/>
        </g>
        
        {/* Alat pertanian (cangkul) */}
        <g transform="translate(95, 75)">
          <rect x="-2" y="0" width="3" height="20" fill="#6D4C41" rx="1"/>
          <path d="M -6 0 L 6 0 L 4 -5 L -4 -5 Z" fill="#757575"/>
          <path d="M -5 -5 L 5 -5 L 3 -6 L -3 -6 Z" fill="#9E9E9E"/>
        </g>
      </svg>
    ),

    // Kebiasaan: Festival Bakar Batu
    customs: (
      <svg viewBox="0 0 120 120" className={className} fill="currentColor">
        <defs>
          <radialGradient id="fireGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFEB3B" />
            <stop offset="30%" stopColor="#FFC107" />
            <stop offset="60%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#FF5722" />
          </radialGradient>
        </defs>
        
        {/* Shadow tanah */}
        <ellipse cx="60" cy="100" rx="45" ry="6" fill="#000" opacity="0.15"/>
        
        {/* Tanah/ground */}
        <ellipse cx="60" cy="95" rx="50" ry="10" fill="#5D4037"/>
        <ellipse cx="60" cy="94" rx="50" ry="8" fill="#6D4C41"/>
        
        {/* Batu-batu panas (hot stones) */}
        <g opacity="0.9">
          <ellipse cx="45" cy="88" rx="10" ry="7" fill="#424242"/>
          <ellipse cx="45" cy="87" rx="9" ry="6" fill="#616161"/>
          <ellipse cx="47" cy="85" rx="4" ry="3" fill="#9E9E9E" opacity="0.6"/>
          
          <ellipse cx="65" cy="88" rx="11" ry="8" fill="#424242"/>
          <ellipse cx="65" cy="87" rx="10" ry="7" fill="#616161"/>
          <ellipse cx="63" cy="85" rx="5" ry="3" fill="#9E9E9E" opacity="0.6"/>
          
          <ellipse cx="75" cy="90" rx="9" ry="6" fill="#424242"/>
          <ellipse cx="75" cy="89" rx="8" ry="5" fill="#616161"/>
          
          <ellipse cx="35" cy="90" rx="8" ry="6" fill="#424242"/>
          <ellipse cx="35" cy="89" rx="7" ry="5" fill="#616161"/>
          
          <ellipse cx="55" cy="92" rx="12" ry="7" fill="#424242"/>
          <ellipse cx="55" cy="91" rx="11" ry="6" fill="#616161"/>
          <ellipse cx="57" cy="89" rx="5" ry="3" fill="#9E9E9E" opacity="0.6"/>
        </g>
        
        {/* Api besar (main fire) */}
        <g opacity="0.95">
          {/* Outer flames */}
          <path d="M 40 85 Q 35 70 40 55 Q 42 65 40 85" fill="#FF5722"/>
          <path d="M 50 85 Q 45 65 48 45 Q 50 60 50 85" fill="#FF6F00"/>
          <path d="M 60 85 Q 55 60 58 40 Q 60 55 60 85" fill="#FF9800"/>
          <path d="M 70 85 Q 68 65 70 50 Q 72 65 70 85" fill="#FF6F00"/>
          <path d="M 80 85 Q 78 70 80 58 Q 82 70 80 85" fill="#FF5722"/>
          
          {/* Middle flames */}
          <path d="M 45 85 Q 42 68 45 52 Q 47 65 45 85" fill="#FFA726" opacity="0.9"/>
          <path d="M 55 85 Q 52 63 55 45 Q 57 60 55 85" fill="#FFB74D" opacity="0.9"/>
          <path d="M 65 85 Q 63 65 65 48 Q 67 63 65 85" fill="#FFA726" opacity="0.9"/>
          <path d="M 75 85 Q 73 70 75 57 Q 77 68 75 85" fill="#FF9800" opacity="0.9"/>
          
          {/* Inner bright flames */}
          <path d="M 50 85 Q 48 70 50 58 Q 52 70 50 85" fill="#FFEB3B" opacity="0.8"/>
          <path d="M 60 85 Q 58 68 60 55 Q 62 68 60 85" fill="#FFF59D" opacity="0.8"/>
          <path d="M 70 85 Q 68 72 70 62 Q 72 72 70 85" fill="#FFEB3B" opacity="0.8"/>
          
          {/* Hot core */}
          <ellipse cx="60" cy="75" rx="8" ry="6" fill="#FFEB3B" opacity="0.6"/>
          <ellipse cx="60" cy="75" rx="5" ry="4" fill="#FFF" opacity="0.4"/>
        </g>
        
        {/* Asap (smoke) */}
        <g opacity="0.4">
          <path d="M 50 50 Q 45 40 48 30 Q 50 35 48 25" stroke="#78909C" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M 60 45 Q 55 35 58 25 Q 60 30 58 20" stroke="#90A4AE" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <path d="M 70 50 Q 68 40 70 30 Q 72 35 70 25" stroke="#78909C" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <ellipse cx="60" cy="22" rx="8" ry="5" fill="#B0BEC5" opacity="0.5"/>
          <ellipse cx="55" cy="18" rx="10" ry="6" fill="#CFD8DC" opacity="0.4"/>
        </g>
        
        {/* Percikan api (sparks) */}
        <g fill="#FFC107" opacity="0.7">
          <circle cx="35" cy="60" r="1.5"/>
          <circle cx="85" cy="65" r="1.5"/>
          <circle cx="42" cy="50" r="2"/>
          <circle cx="78" cy="55" r="2"/>
          <circle cx="55" cy="42" r="1.5"/>
          <circle cx="65" cy="38" r="1.5"/>
        </g>
      </svg>
    ),

    // Nilai: Gotong Royong (mutual cooperation)
    values: (
      <svg viewBox="0 0 120 120" className={className} fill="currentColor">
        <defs>
          <linearGradient id="handGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAB91" />
            <stop offset="100%" stopColor="#FF8A65" />
          </linearGradient>
          <linearGradient id="handGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFCCBC" />
            <stop offset="100%" stopColor="#FFAB91" />
          </linearGradient>
          <radialGradient id="heartGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#F48FB1" />
            <stop offset="50%" stopColor="#EC407A" />
            <stop offset="100%" stopColor="#C2185B" />
          </radialGradient>
        </defs>
        
        {/* Lingkaran cahaya latar */}
        <circle cx="60" cy="60" r="45" fill="#E1F5FE" opacity="0.3"/>
        <circle cx="60" cy="60" r="38" fill="#B3E5FC" opacity="0.2"/>
        
        {/* Tangan kiri */}
        <g>
          <path d="M 25 65 Q 20 55 22 45 L 28 45 Q 30 55 28 65 Z" fill="url(#handGrad1)"/>
          <ellipse cx="25" cy="44" rx="3" ry="2" fill="#FF7043"/>
          <path d="M 28 65 L 45 78 Q 48 80 50 78 L 45 73 Z" fill="url(#handGrad1)" strokeWidth="0"/>
          <path d="M 26 65 L 43 77" stroke="#E64A19" strokeWidth="1" opacity="0.3"/>
        </g>
        
        {/* Tangan kanan */}
        <g>
          <path d="M 95 65 Q 100 55 98 45 L 92 45 Q 90 55 92 65 Z" fill="url(#handGrad2)"/>
          <ellipse cx="95" cy="44" rx="3" ry="2" fill="#FF8A65"/>
          <path d="M 92 65 L 75 78 Q 72 80 70 78 L 75 73 Z" fill="url(#handGrad2)" strokeWidth="0"/>
          <path d="M 94 65 L 77 77" stroke="#E64A19" strokeWidth="1" opacity="0.3"/>
        </g>
        
        {/* Tangan tengah tambahan untuk simbol kebersamaan */}
        <g>
          <path d="M 60 70 Q 58 60 60 50 L 64 50 Q 66 60 64 70 Z" fill="#FFAB91"/>
          <path d="M 62 70 L 60 82" stroke="#FFAB91" strokeWidth="6" strokeLinecap="round"/>
        </g>
        
        {/* Hati besar di tengah */}
        <g transform="translate(60, 60)">
          <path d="M 0 5 Q 0 -8 10 -10 Q 20 -10 20 0 Q 20 12 0 25 Q -20 12 -20 0 Q -20 -10 -10 -10 Q 0 -8 0 5" 
                fill="url(#heartGrad)"/>
          <path d="M 0 5 Q 0 -5 8 -7 Q 15 -7 15 0 Q 15 10 0 20 Q -15 10 -15 0 Q -15 -7 -8 -7 Q 0 -5 0 5" 
                fill="#F06292" opacity="0.6"/>
          <ellipse cx="-5" cy="-2" rx="4" ry="6" fill="#FCE4EC" opacity="0.5"/>
        </g>
        
        {/* Lingkaran unity di sekitar tangan */}
        <circle cx="60" cy="60" r="35" stroke="#81C784" strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="5,5"/>
        
        {/* Bintang/sparkles kebersamaan */}
        <g fill="#FFC107" opacity="0.8">
          <path d="M 30 35 L 32 40 L 37 40 L 33 43 L 35 48 L 30 45 L 25 48 L 27 43 L 23 40 L 28 40 Z"/>
          <path d="M 90 35 L 92 40 L 97 40 L 93 43 L 95 48 L 90 45 L 85 48 L 87 43 L 83 40 L 88 40 Z"/>
          <path d="M 60 25 L 62 30 L 67 30 L 63 33 L 65 38 L 60 35 L 55 38 L 57 33 L 53 30 L 58 30 Z"/>
        </g>
        
        {/* Titik-titik cahaya */}
        <g fill="#4FC3F7" opacity="0.6">
          <circle cx="35" cy="50" r="2"/>
          <circle cx="85" cy="50" r="2"/>
          <circle cx="45" cy="30" r="2.5"/>
          <circle cx="75" cy="30" r="2.5"/>
          <circle cx="60" cy="90" r="2"/>
        </g>
      </svg>
    ),
  }

  return icons[type] || null
}
