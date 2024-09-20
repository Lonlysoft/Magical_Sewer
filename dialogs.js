//arquivo usado para desenhar textos dentro do jogo

const linhaY = {
	maiusculas: 0,
	minusculas: 4,
	sinais: 1,
	numeros: 0,
	pontuacao: 13,
}
const alphabeto = {
	a: [0, 0, 8, 9],
	b: [9, 0, 8, 13],
	c: [18, 0, 8, 9],
	d: [27, 0, 8, 13],
	e: [36, 0, 8, 9],
	f: [45, 0, 5, 13],
	g: [51, 0, 8, 13],
	h: [60, 0, 8, 13],
	i: [69, 0, 1, 13],
	j: [71, 1, 4, 12],
	k: [76, 0, 5, 13],
	l: [82, 0, 3, 13],
	m: [86, 0, 8, 9],
	n: [95, 0, 5, 9],
	o: [0, 16, 8, 9],
	p: [9, 16, 8, 13],
	q: [18, 16, 8, 13],
	r: [27, 16, 6, 8],
	s: [34, 16, 8, 9],
	t: [43, 16, 5, 13],
	u: [49, 16, 9, 9],
	v: [58, 16, 9, 9],
	w: [68, 16, 15, 9],
	x: [84, 16, 5, 9],
	y: [90, 16, 8, 13],
	z: [0, 32, 8, 9],
	letra_A: [0, 48, 11, 13],
	letra_B: [12, 48, 8, 13],
	letra_C: [21, 48, 8, 13],
	letra_D: [30, 48, 8, 13],
	letra_E: [39, 48, 8, 13],
	letra_F: [48, 48, 8, 13],
	letra_G: [57, 48, 8, 13],
	letra_H: [66, 48, 8, 13],
	letra_I: [76, 48, 7, 13],
	letra_J: [84, 48, 7, 13],
	letra_K: [92, 48, 7, 13],
	letra_L: [0, 61, 8, 13],
	letra_M: [9, 61, 9, 13],
	letra_N: [19, 61, 6, 13],
	letra_O: [26, 61, 12, 13],
	letra_P: [39, 61, 8, 13],
	letra_Q: [48, 61, 12, 13],
	letra_R: [60, 61, 9, 13],
	letra_S: [69, 61, 9, 13],
	letra_T: [78, 61, 8, 13],
	letra_U: [87, 61, 8, 13],
	letra_V: [0, 74, 7, 13],
	letra_W: [8, 74, 11, 13],
	letra_X: [20, 74, 7, 13],
	letra_Y: [28, 74, 7, 13],
	letra_Z: [36, 74, 8, 13],
	num1: [1, 88, 3, 13],
	num2: [5, 88, 8, 13],
	num3: [14, 88, 8, 13],
	num4: [23, 88, 7, 13],
	num5: [31, 88, 8, 13],
	num6: [40, 88, 8, 13],
	num7: [49, 88, 8, 13],
	num8: [58, 88, 8, 13],
	num9: [67, 88, 8, 13],
	num0: [76, 88, 8, 13],
	//virgula: [, , , ],
	//ponto: [, , , ],
	//doisPontos: [, , , ],
	//sifrao: [, , , ],
	til: [9, 30, 6, 3],
	//acentoCirvunflexo: [, , , ],
	acentoAgudo: [19, 29, 3, 3],
	crase: [26, 29, 3, 3],
	interrogacao: [86, 88, 8, 13],
	exclamacao: [84, 88, 1, 13],
	//igual: [, , , ],
	graph: new Image()
}
alphabeto.graph.src = "imagens/HUD/Letras_e_simbolos.png"


var bounding_char_limit = caixa_de_texto.largura/8-4
var bounding_cadeia = 0 //reseta toda vez que se há uma alteração na linha
var bounding_charY;

alphaLen = 0

function desenharLetra(LetraPosition, x, y, w, h, RespostaExtra = "non", LetraPosition2 = 0, x2 = 0, y2 = 0, w2 = 0, h2 = 0){
	if(RespostaExtra == "S"){
		HUD_ctx.drawImage(alphabeto.graph,
			LetraPosition2[0], LetraPosition2[1], LetraPosition2[2], LetraPosition2[3],
			x2, y2, w2, h2
		);
	}
	
	HUD_ctx.drawImage(alphabeto.graph,
		LetraPosition[0], LetraPosition[1], LetraPosition[2], LetraPosition[3],
		x, y, w, h
	);
}

function falarLetra(LetraPosition, x, y, w, h, RespostaExtra = "non", LetraPosition2 = 0, x2 = 0, y2 = 0, w2 = 0, h2 = 0){
	if(RespostaExtra == "S"){
		HUD_ctx.drawImage(alphabeto2talk.graph,
			LetraPosition2[0], LetraPosition2[1], LetraPosition2[2], LetraPosition2[3],
			x2, y2, w2, h2
		);
	}
	
	HUD_ctx.drawImage(alphabeto2talk.graph,
		LetraPosition[0], LetraPosition[1], LetraPosition[2], LetraPosition[3],
		x, y, w, h
	);
}

function escreva(texto, x, y, scale = 0){ 
	bounding_char = x;
	bounding_charY = [linhaY.maiusculas, linhaY.minusculas, linhaY.sinais, linhaY.numeros, linhaY.pontuacao];
	let linhaY_maiusculas = bounding_charY[0] + y
	let linhaY_minusculas = bounding_charY[1] + y
	//linhaY_maiusculas = y + linhaY_maiusculas
		for(let i = 0; i < texto.length; i++){
			switch(texto[i]){
				case '×':
					if(texto[i+1] == "n"){
						i++;
						y += 13+scale;
					}
					else if(texto[i+1] == "t"){
						i++;
						bounding_char += 132
					}
					else{
						continue;
					}
					break;
				case 'A': desenharLetra(
							alphabeto.letra_A,
							bounding_char, linhaY_maiusculas,
							alphabeto.letra_A[2]+scale,
							alphabeto.letra_A[3]+scale);
					alphaLen = alphabeto.letra_A[2]+scale
					break;
														
				case 'B': desenharLetra(
							alphabeto.letra_B,
							
							bounding_char, linhaY_maiusculas,
							alphabeto.letra_B[2]+scale,
							alphabeto.letra_B[3]+scale);
					alphaLen = alphabeto.letra_B[2]+scale;
					break;
					
				case 'C': desenharLetra(
							alphabeto.letra_C,
							
							bounding_char, linhaY_maiusculas,
							alphabeto.letra_C[2]+scale,
							alphabeto.letra_C[3]+scale);
					alphaLen = alphabeto.letra_C[2]+scale;
					break;
														
				case 'D': desenharLetra(
							alphabeto.letra_D,
							
							bounding_char, linhaY_maiusculas,
							alphabeto.letra_D[2]+scale,
							alphabeto.letra_D[3]+scale);
							alphaLen = alphabeto.letra_D[2]
					break;
														
				case 'E': desenharLetra(
							alphabeto.letra_E,
							bounding_char, linhaY_maiusculas,
							alphabeto.letra_E[2]+scale,
							alphabeto.letra_E[3]+scale);
					alphaLen = alphabeto.letra_E[2]
					break;
														
				case 'F': desenharLetra(
							alphabeto.letra_F,
							 bounding_char, linhaY_maiusculas,
							 alphabeto.letra_F[2]+scale, alphabeto.letra_F[3]+scale);
					alphaLen = alphabeto.letra_F[2]
					break;
														
				case 'G': desenharLetra(
							 alphabeto.letra_G,
							 bounding_char, linhaY_maiusculas,
							 alphabeto.letra_G[2]+scale, alphabeto.letra_G[3]+scale);
					alphaLen = alphabeto.letra_G[2]
					break;
														
				case 'H': desenharLetra(
							 alphabeto.letra_H,
							 bounding_char, linhaY_maiusculas,
							 alphabeto.letra_H[2]+scale, alphabeto.letra_H[3]+scale);
					alphaLen = alphabeto.letra_H[2];
					break;
														
				case 'I': desenharLetra(
					alphabeto.letra_I,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_I[2]+scale, alphabeto.letra_I[3]+scale);
					alphaLen = alphabeto.letra_I[2]
					break;
														
				case 'J': desenharLetra(
					alphabeto.letra_J,
					bounding_char, linhaY_maiusculas, 
					alphabeto.letra_J[2]+scale, alphabeto.letra_J[3]+scale); 
					alphaLen = alphabeto.letra_J[2]
					break;
														
				case 'K': desenharLetra(
					alphabeto.letra_K,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_K[2]+scale, alphabeto.letra_K[3]+scale); 
					alphaLen = alphabeto.letra_K[2]
					break;
														
				case 'L': desenharLetra(
					alphabeto.letra_L,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_L[2]+scale, alphabeto.letra_L[3]+scale);
					alphaLen = alphabeto.letra_L[2]
					break;
														
				case 'M': desenharLetra(
					alphabeto.letra_M,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_M[2]+scale, alphabeto.letra_M[3]+scale);
					alphaLen = alphabeto.letra_M[2];
					break;
														
				case 'N': desenharLetra(
					alphabeto.letra_N,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_N[2]+scale, alphabeto.letra_N[3]+scale);
					alphaLen = alphabeto.letra_N[2]
					break;
														
				case 'O': desenharLetra(
					alphabeto.letra_O,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_O[2]+scale, alphabeto.letra_O[3]+scale);
					alphaLen = alphabeto.letra_O[2];
					break;
														
				case 'P': desenharLetra( 
					alphabeto.letra_P,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_P[2]+scale, alphabeto.letra_P[3]+scale);
					alphaLen = alphabeto.letra_P[2];
					break;
														
				case 'Q': desenharLetra(
					alphabeto.letra_Q,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_Q[2]+scale, alphabeto.letra_Q[3]+scale);
					alphaLen = alphabeto.letra_Q[2]
					break
														
				case 'R': desenharLetra(
					alphabeto.letra_R,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_R[2]+scale, alphabeto.letra_R[3]+scale);
					alphaLen = alphabeto.letra_R[2]
					break
														
				case 'S': desenharLetra(
					alphabeto.letra_S,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_S[2]+scale, alphabeto.letra_S[3]+scale);
					alphaLen = alphabeto.letra_S[2]
					break
														
				case 'T': desenharLetra(
					alphabeto.letra_T,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_T[2]+scale, alphabeto.letra_T[3]+scale);
					alphaLen = alphabeto.letra_T[2]
														break
														
				case 'U': desenharLetra(
					alphabeto.letra_U, 
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_U[2]+scale, alphabeto.letra_U[3]+scale);
					alphaLen = alphabeto.letra_U[2]
														break
														
				case 'V': desenharLetra(
					alphabeto.letra_V,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_V[2]+scale, alphabeto.letra_V[3]+scale);
					alphaLen = alphabeto.letra_V[2];
					break;
														
				case 'W': desenharLetra(
					alphabeto.letra_W,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_W[2]+scale, alphabeto.letra_W[3]+scale);
					alphaLen = alphabeto.letra_W[2]
					break
														
				case 'X': desenharLetra(
					alphabeto.letra_X,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_X[2]+scale, alphabeto.letra_X[3]+scale);
					alphaLen = alphabeto.letra_X[2];
					break;
														
				case 'Y': desenharLetra(
					alphabeto.letra_Y,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_Y[2]+scale, alphabeto.letra_Y[3]+scale);
					alphaLen = alphabeto.letra_Y[2];
					break;
														
				case 'Z': desenharLetra(
					alphabeto.letra_Z,
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_Z[2]+scale, alphabeto.letra_Z[3]+scale);
					alphaLen = alphabeto.letra_Z[2];
					break;
														
				case 'a': desenharLetra(
					alphabeto.a,
					bounding_char, linhaY_minusculas,
					alphabeto.a[2]+scale, alphabeto.a[3]+scale);
					alphaLen = alphabeto.a[2];
					break;
					
				case 'b': desenharLetra(alphabeto.b,
					bounding_char, linhaY_maiusculas,
					alphabeto.b[2]+scale, alphabeto.b[3]+scale);
					alphaLen = alphabeto.b[2];
					break;
					
				case 'c': desenharLetra(
					alphabeto.c,
					bounding_char, linhaY_minusculas,
					alphabeto.c[2]+scale, alphabeto.c[3]+scale);
					aplhaLen = alphabeto.c[2]
					break
				case 'd': desenharLetra(
					alphabeto.d,
					bounding_char, linhaY_maiusculas,
					alphabeto.d[2]+scale, alphabeto.d[3]+scale);
					alphaLen = alphabeto.d[2]
					break
				case 'e': desenharLetra(
					alphabeto.e,
					bounding_char, linhaY_minusculas,
					alphabeto.e[2]+scale, alphabeto.e[3]+scale);
					alphaLen = alphabeto.e[2]
					break
					
				case 'f': desenharLetra(alphabeto.f, bounding_char, linhaY_maiusculas, alphabeto.f[2]+scale, alphabeto.f[3]+scale);
					alphaLen = alphabeto.f[2]
					break
					
				case 'g': desenharLetra(
					alphabeto.g,
					bounding_char, linhaY_minusculas, 
					alphabeto.g[2]+scale, alphabeto.g[3]+scale);
					alphaLen = alphabeto.g[2]
					break
					
				case 'h': desenharLetra(alphabeto.h,
					bounding_char, linhaY_maiusculas,
					alphabeto.h[2]+scale, alphabeto.h[3]+scale);
					alphaLen = alphabeto.h[2]
					break
					
				case 'i': desenharLetra(alphabeto.i,
					bounding_char, linhaY_maiusculas,
					alphabeto.i[2]+scale, alphabeto.i[3]+scale
					);
					alphaLen = alphabeto.i[2]
					break
					
				case 'j': desenharLetra(
					alphabeto.j,
					bounding_char, linhaY_minusculas,
					alphabeto.j[2]+scale, alphabeto.j[3]+scale);
					alphaLen = alphabeto.j[2]
					break
					
				case 'k': desenharLetra(alphabeto.k, 
					bounding_char, linhaY_maiusculas,
					alphabeto.k[2]+scale, alphabeto.k[3]+scale);
					alphaLen = alphabeto.k[2]
					break
					
				case 'l': desenharLetra(alphabeto.l,
					bounding_char, linhaY_maiusculas,
					alphabeto.l[2]+scale, alphabeto.l[3]+scale);
					alphaLen = alphabeto.l[2]
					break
					
				case 'm': bounding_char += 2
					desenharLetra(
							alphabeto.m,
							bounding_char, linhaY_minusculas,
							alphabeto.m[2]+scale, alphabeto.m[3]+scale);
					alphaLen = alphabeto.m[2]
					break
					
				case 'n': desenharLetra(alphabeto.n, bounding_char, linhaY_minusculas, alphabeto.n[2]+scale, alphabeto.n[3]+scale);
					alphaLen = alphabeto.n[2]
					break
					
				case 'o': desenharLetra(alphabeto.o, bounding_char, linhaY_minusculas, alphabeto.o[2]+scale, alphabeto.o[3]+scale);
					alphaLen = alphabeto.o[2]
					break
					
				case 'p': desenharLetra(alphabeto.p, bounding_char, linhaY_minusculas, alphabeto.p[2]+scale, alphabeto.p[3]+scale);
					alphaLen = alphabeto.p[2]
					break
					
				case 'q': desenharLetra(alphabeto.q, bounding_char, linhaY_minusculas, alphabeto.q[2]+scale, alphabeto.q[3]+scale);
					alphaLen = alphabeto.q[2]
					break
					
				case 'r': desenharLetra(alphabeto.r, bounding_char, linhaY_minusculas, alphabeto.r[2]+scale, alphabeto.r[3]+scale);
					alphaLen = alphabeto.r[2]
					break
					
				case 's': desenharLetra(alphabeto.s, bounding_char, linhaY_minusculas, alphabeto.s[2]+scale, alphabeto.s[3]+scale);
					alphaLen = alphabeto.s[2]
					break
					
				case 't': desenharLetra(alphabeto.t, bounding_char, linhaY_maiusculas, alphabeto.t[2]+scale, alphabeto.t[3]+scale);
					alphaLen = alphabeto.t[2]
					break
					
				case 'u': desenharLetra(alphabeto.u, bounding_char, linhaY_minusculas, alphabeto.u[2]+scale, alphabeto.u[3]+scale); break
					alphaLen = alphabeto.u[2]
					break
					
				case 'v': desenharLetra(alphabeto.v, bounding_char, linhaY_minusculas, alphabeto.v[2]+scale, alphabeto.v[3]+scale);
					alphaLen = alphabeto.v[2]
					break
					
				case 'w': desenharLetra(alphabeto.w, bounding_char, linhaY_minusculas, alphabeto.w[2]+scale, alphabeto.w[3]+scale);
					alphaLen = alphabeto.w[2]
					break
					
				case 'x': desenharLetra(alphabeto.x, bounding_char, linhaY_minusculas, alphabeto.x[2]+scale, alphabeto.x[3]+scale);
					alphaLen = alphabeto.x[2]
					break
					
				case 'y': desenharLetra(alphabeto.y, bounding_char, linhaY_minusculas, alphabeto.y[2]+scale, alphabeto.y[3]+scale); 
					alphaLen = alphabeto.y[2]
					break
					
				case 'z': desenharLetra(alphabeto.z, bounding_char, linhaY_minusculas, alphabeto.z[2]+scale, alphabeto.z[3]+scale);
					alphaLen = alphabeto.z[2]
					break
					
				case "Á" : desenharLetra( alphabeto.acento_agudo, alphabeto.letra_A[2]-4, linhaY.simbolos.sobre, acento_agudo[2]+scale, acento_agudo[3]+scale)
					desenharLetra( alphabeto.letra_A[0], alphabeto.letra_A[1], slphabeto.letra_A[2], alphabeto.letra_A[3], bounding_char, linhaY_maiusculas, alphabeto.letra_A[2]+scale, alphabeto.letra_A[3]+scale);
					alphaLen = alphabeto.letra_A[2]
					break
				case "À" :
					desenharLetra( alphabeto.letra_A, bounding_char, linhaY_maiusculas, alphabeto.letra_A[2]+scale, alphabeto.letra_A[3]+scale);
					break
				case "Ã" :
					desenharLetra( alphabeto.letra_A, bounding_char, linhaY_maiusculas, alphabeto.letra_A[2]+scale, alphabeto.A[3]+scale);
					break
				case "Â" :
					desenharLetra( alphabeto.letra_A, bounding_char, linhaY_maiusculas, alphabeto.letra_A[2]+scale, alphabeto.letra_A[3]+scale);
					break
				case "á" :
					//lembrar do acento agudo
					desenharLetra(alphabeto.a, bounding_char, linhaY_minusculas, alphabeto.a[2]+scale, alphabeto.a[3]+scale); break
				case "à" :
					//lembrar da cràse
					desenharLetra(alphabeto.a, bounding_char, linhaY_minusculas, alphabeto.a[2]+scale, alphabeto.a[3]+scale); break
				case "ã" :
					//lembrar do till
					desenharLetra(alphabeto.a, bounding_char, linhaY_minusculas, alphabeto.a[2]+scale, alphabeto.a[3]+scale); break
				case "â" :
					//lembrar do acento sircunfréxo
					desenharLetra(alphabeto.a, bounding_char, linhaY_minusculas, alphabeto.a[2]+scale, alphabeto.a[3]+scale); break
				case "Ô" :
					desenharLetra(alphabeto.letra_O,
						bounding_char, linhaY_maiusculas,
						alphabeto.letra_O[2]+scale, alphabeto.letra_O[3]+scale); 
					break
				case "Ó" :
					desenharLetra(
						alphabeto.letra_O,
						bounding_char, linhaY_maiusculas,
						alphabeto.letra_O[2]+scale, alphabeto.letra_O[3]+scale);
					break
				case "Õ" :
					desenharLetra(
						alphabeto.letra_O,
						bounding_char, linhaY_maiusculas,
						alphabeto.letra_O[2]+scale,
						alphabeto.letra_O[3]+scale);
					break
					
				case "ó" :
					desenharLetra(
						alphabeto.o,
						bounding_char, linhaY_minusculas,
						alphabeto.o[2]+scale,
						alphabeto.o[3]+scale);
					break;
					
				case "õ" :
					desenharLetra(
						alphabeto.o,
					
						bounding_char,linhaY_minusculas,
						alphabeto.o[2]+scale,
						alphabeto.o[3]+scale);
					break;
					
				case "ô" :
					desenharLetra(
						alphabeto.o,
						
						bounding_char, linhaY_minusculas,
						alphabeto.o[2]+scale, alphabeto.o[3]+scale);
						break
					
				case "É" :
					desenharLetra(
						alphabeto.letra_E,
						bounding_char, linhaY_maiusculas,
						alphabeto.letra_E[2]+scale,
						alphabeto.letra_E[3]+scale);
					
					//comando faltando
					
					break
				case "Ê":
					desenharLetra(
						alphabeto.letra_E,
						
						bounding_char, linhaY_maiusculas,
						alphabeto.letra_E[2]+scale,
						alphabeto.letra_E[3]+scale);
						
					//comando faltando
						
					break
				case "È" :
					desenharLetra(
					alphabeto.letra_E,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.letra_E[2]+scale,
					alphabeto.letra_E[3]+scale);
					
					//comando faltando
					
					break;
					
				case "Ë" :
					desenharLetra(
						alphabeto.letra_E,
						
						bounding_char, linhaY_maiusculas,
						alphabeto.letra_E[2]+scale,
						alphabeto.letra_E[3]+scale); 
					
					//comando faltando!
					
					break;
					
				case "é" :
					desenharLetra(
						alphabeto.e,
						bounding_char, linhaY_minusculas,
						alphabeto.e[2]+scale, alphabeto.e[3]+scale); break
				case "ê" :
					desenharLetra(
						alphabeto.e,
						bounding_char, linhaY_minusculas,
						alphabeto.e[2]+scale, alphabeto.e[3]+scale); 
					break
				case "è" :
					desenharLetra( 
						alphabeto.e,
						
						bounding_char, linhaY_minusculas,
						alphabeto.e[2]+scale, alphabeto.e[3]+scale);
					break;
				case "ë" : //é levado como um till
					desenharLetra(
						alphabeto.e,
						
						bounding_char, linhaY_minusculas,
						alphabeto.e[2]+scale,
						alphabeto.e[3]+scale);
					break;
				
				case "1": desenharLetra(
					alphabeto.num1,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num1[2]+scale, alphabeto.num1[3]+scale);
					break;
															
				case "2" : desenharLetra(
					alphabeto.num2,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num2[2]+scale,
					alphabeto.num2[3]+scale);
					break;
															
				case "3" : desenharLetra(
					alphabeto.num3,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num3[2]+scale,
					alphabeto.num3[3]+scale);
					break
															
				case "4" : desenharLetra(
					alphabeto.num4,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num4[2]+scale,
					alphabeto.num4[3]+scale); break
															
				case "5" : desenharLetra(
					alphabeto.num5,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num5[2]+scale,
					alphabeto.num5[3]+scale);
					break;
															
				case "6" : desenharLetra(
					alphabeto.num6,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num6[2]+scale,
					alphabeto.num6[3]+scale);
					break;
															
				case "7" : desenharLetra(
					alphabeto.num7, 
					bounding_char, linhaY_maiusculas,
					alphabeto.num7[2]+scale, alphabeto.num7[3]+scale); 
					break;
															
				case "8" :desenharLetra( 
					alphabeto.num8,
					
					bounding_char, linhaY_maiusculas, 
					alphabeto.num8[2]+scale, alphabeto.num8[3]+scale);
					break;
															
				case "9" :desenharLetra(
					alphabeto.num9,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num9[2]+scale,
					alphabeto.num9[3]+scale);
					break;
															
				case "0" : desenharLetra(
					alphabeto.num0,
					
					bounding_char, linhaY_maiusculas,
					alphabeto.num0[2]+scale,
					alphabeto.num0[3]+scale);
					alphaLen = alphabeto.num0[2];
					break;
															
				default: bounding_char += 8; break;
			}
		bounding_char += alphaLen + 2;
	}
}


function fale(texto, x, y, scale = 0){
	ctx.font = ""+(16 + scale)+"px classicalComic";
	ctx.fillStyle = "#000000"
	ctx.fillText(texto, x, y+2);
	ctx.fillStyle = "#FFFFFF"
	ctx.fillText(texto, x, y);
}
