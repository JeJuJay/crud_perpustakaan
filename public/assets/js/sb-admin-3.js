/*!
 * Perpustakaan JavaScript jQuery v3.7.0
 * https://jquery.com/
 *
 * Hak Cipta OpenJS Foundation dan kontributor lainnya
 * Dirilis di bawah lisensi MIT
 * https://jquery.org/license
 *
 * Tanggal: 2023-05-11T18:29Z
 */
( fungsi( global, pabrik ) {

	"gunakan ketat";

	if ( typeof module === "objek" && typeof module.exports === "object" ) {

		// Untuk lingkungan seperti CommonJS dan CommonJS dengan `jendela` yang tepat
		// hadir, jalankan pabrik dan dapatkan jQuery.
		// Untuk lingkungan yang tidak memiliki `jendela` dengan `dokumen`
		// (seperti Node.js), mengekspos pabrik sebagai module.exports.
		// Hal ini menekankan perlunya pembuatan `jendela` yang sebenarnya.
		// misalnya var jQuery = require("jquery")(window);
		// Lihat tiket trac-14549 untuk info lebih lanjut.
		modul.ekspor = global.dokumen ?
			pabrik (global, benar):
			fungsi( w ) {
				if ( !w.dokumen ) {
					throw new Error( "jQuery memerlukan jendela dengan dokumen" );
				}
				kembali ke pabrik (w);
			};
	} kalau tidak {
		pabrik (global);
	}

// Lewati ini jika jendela belum ditentukan
} )( tipe jendela !== "tidak terdefinisi" ? jendela : ini, fungsi( jendela, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// melempar pengecualian ketika kode non-ketat (misalnya, ASP.NET 4.5) mengakses mode ketat
//argumen.callee.caller (trac-13335). Namun pada jQuery 3.0 (2016), mode ketat seharusnya menjadi hal yang umum
// cukup bahwa semua upaya tersebut dilindungi dalam blok percobaan.
"gunakan ketat";

var arr = [];

var getProto = Objek.getPrototypeOf;

var irisan = arr.iris;

var datar = arr.datar ? fungsi( susunan ) {
	return arr.flat.panggilan( array );
} : fungsi( susunan ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Objek );

var dukungan = {};

var isFunction = fungsi isFunction( obj ) {

		// Dukungan: Chrome <=57, Firefox <=52
		// Di beberapa browser, typeof mengembalikan "fungsi" untuk elemen <object> HTML
		// (yaitu, `typeof document.createElement( "object" ) === "function"`).
		// Kami tidak ingin mengklasifikasikan *setiap* node DOM sebagai sebuah fungsi.
		// Dukungan: QtWeb <=3.8.5, WebKit <=534.34, alat wkhtmltopdf <=0.12.5
		// Ditambah lagi untuk WebKit lama, typeof mengembalikan "fungsi" untuk koleksi HTML
		// (misalnya, `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		kembalikan typeof obj === "fungsi" && typeof obj.nodeType !== "angka" &&
			typeof obj.item !== "fungsi";
	};


var isWindow = fungsi isWindow( obj ) {
		kembalikan obj != null && obj === obj.window;
	};


var dokumen = jendela.dokumen;



	var diawetkanScriptAttributes = {
		ketik: benar,
		src: benar,
		nonce: benar,
		noModul: benar
	};

	fungsi DOMEval( kode, simpul, dokumen ) {
		dok = dok || dokumen;

		var saya, val,
			skrip = doc.createElement( "skrip" );

		skrip.teks = kode;
		jika ( simpul ) {
			untuk ( saya di PreservedScriptAttributes ) {

				// Dukungan: Firefox 64+, Edge 18+
				// Beberapa browser tidak mendukung properti "nonce" pada skrip.
				// Di sisi lain, menggunakan `getAttribute` saja tidak cukup
				// atribut `nonce` disetel ulang ke string kosong kapan pun
				// menjadi konteks penelusuran terhubung.
				// Lihat https://github.com/whatwg/html/issues/2369
				// Lihat https://html.spec.whatwg.org/#nonce-attributes
				// Cek `node.getAttribute` ditambahkan demi kepentingan
				// `jQuery.globalEval` sehingga dapat memalsukan node yang tidak berisi nonce
				// melalui suatu objek.
				val = simpul[ saya ] || simpul.getAttribute && simpul.getAttribute( i );
				jika ( val ) {
					skrip.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( skrip ).parentNode.removeChild( skrip );
	}


fungsi untuk Tipe( obj ) {
	jika ( obj == nol ) {
		kembalikan objek + "";
	}

	// Dukungan: Android <=2.3 saja (RegExp berfungsi)
	kembalikan tipe objek === "objek" || typeof obj === "fungsi"?
		class2type[ toString.panggilan( obj ) ] || "objek":
		jenis objek;
}
/* Simbol global */
// Mendefinisikan global ini di .eslintrc.json akan menimbulkan bahaya dalam penggunaan global
// tidak dijaga di tempat lain, tampaknya lebih aman mendefinisikan global hanya untuk modul ini



var versi = "3.7.0",

	rhtmlAkhiran = /HTML$/i,

	// Tentukan salinan lokal jQuery
	jQuery = fungsi( pemilih, konteks ) {

		// Objek jQuery sebenarnya hanyalah konstruktor init yang 'ditingkatkan'
		// Perlu init jika jQuery dipanggil (izinkan kesalahan muncul jika tidak disertakan)
		kembalikan jQuery.fn.init baru (pemilih, konteks);
	};

jQuery.fn = jQuery.prototipe = {

	// Versi jQuery saat ini sedang digunakan
	jquery: versi,

	konstruktor: jQuery,

	// Panjang default objek jQuery adalah 0
	panjang: 0,

	keArray: fungsi() {
		kembalikan irisan.panggilan( ini );
	},

	// Dapatkan elemen ke-N dalam kumpulan elemen yang cocok ATAU
	// Dapatkan seluruh elemen yang cocok sebagai array yang bersih
	dapatkan: fungsi( angka ) {

		// Mengembalikan semua elemen dalam array yang bersih
		jika ( angka == nol ) {
			kembalikan irisan.panggilan( ini );
		}

		// Kembalikan hanya satu elemen dari himpunan
		nomor pengembalian < 0 ? ini[ angka + ini.panjang ] : ini[ angka ];
	},

	// Ambil array elemen dan masukkan ke dalam tumpukan
	// (mengembalikan kumpulan elemen baru yang cocok)
	pushStack: fungsi( elemen ) {

		// Membangun kumpulan elemen baru yang cocok dengan jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Tambahkan objek lama ke dalam tumpukan (sebagai referensi)
		ret.prevObject = ini;

		// Mengembalikan kumpulan elemen yang baru dibentuk
		kembali mundur;
	},

	// Jalankan callback untuk setiap elemen di set yang cocok.
	masing-masing: fungsi( panggilan balik ) {
		kembalikan jQuery.each( ini, panggilan balik );
	},

	peta: fungsi( panggilan balik ) {
		kembalikan ini.pushStack( jQuery.map( ini, fungsi( elem, i ) {
			kembalikan panggilan balik.panggilan( elem, i, elem );
		} ) );
	},

	irisan: fungsi() {
		kembalikan ini.pushStack( irisan.terapkan( ini, argumen ) );
	},

	pertama: fungsi() {
		kembalikan ini.eq( 0 );
	},

	terakhir: fungsi() {
		kembalikan ini.eq( -1 );
	},

	genap: fungsi() {
		kembalikan ini.pushStack( jQuery.grep( ini, fungsi( _elem, i ) {
			kembali ( saya + 1 ) % 2;
		} ) );
	},

	aneh: fungsi() {
		kembalikan ini.pushStack( jQuery.grep( ini, fungsi( _elem, i ) {
			kembalikan saya % 2;
		} ) );
	},

	persamaan: fungsi( saya ) {
		var len = ini.panjang,
			j = +i + ( saya < 0 ? len : 0 );
		kembalikan ini.pushStack( j >= 0 && j < len ? [ ini[ j ] ] : [] );
	},

	akhir: fungsi() {
		kembalikan ini.prevObject || ini.konstruktor();
	},

	// Hanya untuk penggunaan internal.
	// Berperilaku seperti metode Array, bukan seperti metode jQuery.
	dorong dorong,
	urutkan: arr.sort,
	sambungan: arr.sambungan
};

jQuery.extend = jQuery.fn.extend = fungsi() {
	opsi var, nama, src, salin, copyIsArray, klon,
		target = argumen[ 0 ] || {},
		saya = 1,
		panjang = argumen.panjang,
		dalam = salah;

	// Menangani situasi penyalinan mendalam
	if ( typeof target === "boolean" ) {
		dalam = sasaran;

		// Lewati boolean dan target
		target = argumen[ i ] || {};
		saya++;
	}

	// Menangani kasus ketika target berupa string atau sesuatu (mungkin dalam salinan dalam)
	if ( typeof target !== "objek" && !isFunction( target ) ) {
		sasaran = {};
	}

	// Perluas jQuery sendiri jika hanya satu argumen yang diteruskan
	jika ( saya === panjang ) {
		sasaran = ini;
		Saya--;
	}

	untuk ( ; saya < panjang; i++ ) {

		// Hanya menangani nilai yang bukan null/tidak terdefinisi
		if ( ( pilihan = argumen[ i ] ) != null ) {

			// Perluas objek dasar
			untuk (nama dalam opsi) {
				salin = pilihan[ nama ];

				// Mencegah polusi Objek.prototipe
				// Mencegah perulangan yang tidak pernah berakhir
				if ( nama === "__proto__" || target === salin ) {
					melanjutkan;
				}

				// Berulang jika kita menggabungkan objek atau array biasa
				if ( dalam && salin && ( jQuery.isPlainObject( salin ) ||
					( copyIsArray = Array.isArray( salin ) ) ) ) {
					src = sasaran[ nama ];

					// Pastikan tipe yang tepat untuk nilai sumber
					jika ( copyIsArray && !Array.isArray( src ) ) {
						klon = [];
					} lain jika ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						kloning = {};
					} kalau tidak {
						klon = src;
					}
					copyIsArray = salah;

					// Jangan pernah memindahkan objek asli, kloninglah objek tersebut
					target[ nama ] = jQuery.extend( dalam, klon, salin );

				// Jangan memasukkan nilai yang tidak ditentukan
				} else if ( salin !== tidak terdefinisi ) {
					target[ nama ] = salin;
				}
			}
		}
	}

	// Mengembalikan objek yang diubah
	target pengembalian;
};

jQuery.perpanjang( {

	// Unik untuk setiap salinan jQuery di halaman
	expando: "jQuery" + ( versi + Math.random() ).replace( /\D/g, "" ),

	// Asumsikan jQuery sudah siap tanpa modul siap
	siap: benar,

	kesalahan: fungsi( pesan ) {
		melempar Kesalahan baru( pesan );
	},

	noop: fungsi() {},

	isPlainObject: fungsi( obj ) {
		var proto, Ctor;

		// Deteksi hal negatif yang jelas
		// Gunakan toString sebagai pengganti jQuery.type untuk menangkap objek host
		if ( !obj || toString.call( obj ) !== "[Objek Objek]" ) {
			kembali salah;
		}

		proto = dapatkanProto( obj );

		// Objek tanpa prototipe (misalnya, `Object.create( null )`) adalah objek biasa
		jika ( !proto ) {
			kembali benar;
		}

		// Objek dengan prototipe terlihat biasa jika dibuat oleh fungsi Objek global
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		kembalikan tipe Ctor === "fungsi" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: fungsi( obj ) {
		nama var;

		untuk (nama dalam objek) {
			kembali salah;
		}
		kembali benar;
	},

	// Mengevaluasi skrip dalam konteks yang disediakan; jatuh kembali ke global
	// jika tidak ditentukan.
	globalEval: fungsi( kode, opsi, dokumen ) {
		DOMEval( kode, { nonce: opsi && opsi.nonce }, doc );
	},

	masing-masing: fungsi( obj, panggilan balik ) {
		panjang var, i = 0;

		jika ( isArrayLike( obj ) ) {
			panjang = obj.panjang;
			untuk ( ; saya < panjang; i++ ) {
				if ( panggilan balik.panggilan( obj[ i ], i, obj[ i ] ) === false ) {
					merusak;
				}
			}
		} kalau tidak {
			untuk ( saya dalam objek ) {
				if ( panggilan balik.panggilan( obj[ i ], i, obj[ i ] ) === false ) {
					merusak;
				}
			}
		}

		mengembalikan objek;
	},


	// Mengambil nilai teks dari array node DOM
	teks: fungsi( elemen ) {
		simpul var,
			kembali = "",
			saya = 0,
			nodeType = elem.nodeType;

		jika ( !nodeType ) {

			// Jika tidak ada nodeType, ini diharapkan berupa array
			while ( ( simpul = elemen[ i++ ] ) ) {

				// Jangan melintasi node komentar
				ret += jQuery.teks( simpul );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			kembalikan elemen.textContent;
		} else if ( tipe node === 3 || tipe node === 4 ) {
			kembalikan elem.nodeValue;
		}

		// Jangan menyertakan komentar atau node instruksi pemrosesan

		kembali mundur;
	},

	// hasil hanya untuk penggunaan internal
	makeArray: fungsi( arr, hasil ) {
		var ret = hasil || [];

		jika ( arr != nol ) {
			jika ( isArrayLike( Objek( arr ) ) ) {
				jQuery.merge( kembali,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} kalau tidak {
				push.call( ret, arr );
			}
		}

		kembali mundur;
	},

	inArray: fungsi( elem, arr, i ) {
		kembali arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: fungsi( elemen ) {
		var namespace = elemen && elemen.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Asumsikan HTML ketika documentElement belum ada, misalnya di dalam
		// fragmen dokumen.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Dukungan: Android <=4.0 saja, PhantomJS 1 saja
	// push.apply(_, arraylike) menggunakan WebKit kuno
	gabungan: fungsi( pertama, kedua ) {
		var len = +detik.panjangnya,
			j = 0,
			i = pertama.panjang;

		untuk ( ; j < len; j++ ) {
			pertama[ i++ ] = kedua[ j ];
		}

		first.length = i;

		kembali dulu;
	},

	grep: fungsi( elemen, panggilan balik, balikkan ) {
		var panggilan balikInverse,
			cocok = [],
			saya = 0,
			panjang = elemen.panjang,
			callbackExpect = !membalikkan;

		// Telusuri array, simpan itemnya saja
		// yang meneruskan fungsi validator
		untuk ( ; saya < panjang; i++ ) {
			callbackInverse = !callback( elemen[ i ], i );
			jika ( callbackInverse !== callbackExpect ) {
				cocok.push( elemen[ i ] );
			}
		}

		pertandingan kembali;
	},

	// arg hanya untuk penggunaan internal
	peta: fungsi( elemen, panggilan balik, arg ) {
		panjang var, nilai,
			saya = 0,
			kembali = [];

		// Telusuri array, terjemahkan setiap item ke nilai barunya
		if ( isArrayLike( elemen ) ) {
			panjang = elemen.panjang;
			untuk ( ; saya < panjang; i++ ) {
				nilai = panggilan balik( elemen[ i ], i, arg );

				jika ( nilai != nol ) {
					ret.push( nilai );
				}
			}

		// Telusuri setiap kunci pada objek,
		} kalau tidak {
			untuk ( saya di elemen ) {
				nilai = panggilan balik( elemen[ i ], i, arg );

				jika ( nilai != nol ) {
					ret.push( nilai );
				}
			}
		}

		// Ratakan semua array yang disarangkan
		kembali datar( ret );
	},

	// Penghitung GUID global untuk objek
	panduan: 1,

	// jQuery.support tidak digunakan di Core tetapi proyek lain melampirkannya
	// properti padanya sehingga harus ada.
	dukungan: dukungan
} );

if ( typeof Simbol === "fungsi" ) {
	jQuery.fn[ Simbol.iterator ] = arr[ Simbol.iterator ];
}

// Isi peta class2type
jQuery.each( "Nomor Boolean String Fungsi Array Tanggal RegExp Simbol Kesalahan Objek".split( " " ),
	fungsi( _i, nama ) {
		class2type[ "[objek " + nama + "]" ] = nama.toLowerCase();
	} );

fungsi isArrayLike( obj ) {

	// Dukungan: hanya iOS 8.2 asli (tidak dapat direproduksi di simulator)
	// Pemeriksaan `in` digunakan untuk mencegah kesalahan JIT (gh-2145)
	// hasOwn tidak digunakan di sini karena negatif palsu
	// mengenai panjang Nodelist di IE
	var panjang = !!obj && "panjang" di obj && obj.panjang,
		mengetik = toType( obj );

	jika ( isFunction( obj ) || isWindow( obj ) ) {
		kembali salah;
	}

	tipe kembalian === "array" || panjang === 0 ||
		typeof length === "angka" && panjang > 0 && ( panjang - 1 ) di obj;
}


fungsi nama simpul( elemen, nama ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === nama.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var sambungan = arr.sambungan;


var spasi = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = RegExp baru(
	"^" + spasi + "+|((?:^|[^\\\\])(?:\\\\.)*)" + spasi + "+$",
	"G"
);




// Catatan: sebuah elemen tidak mengandung dirinya sendiri
jQuery.berisi = fungsi( a, b ) {
	var bup = b && b.parentNode;

	kembalikan a === bup || !!( bup && bup.nodeType === 1 && (

		// Dukungan: YAITU 9 - 11+
		// IE tidak memiliki `berisi` di SVG.
		a.berisi ?
			a.berisi( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// serialisasi string/pengidentifikasi CSS
// https://drafts.csswg.org/cssom/#common-serializing-idiom
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

fungsi fcssescape( ch, asCodePoint ) {
	jika ( asCodePoint ) {

		// U+0000 NULL menjadi KARAKTER PENGGANTI U+FFFD
		jika ( ch === "\0" ) {
			kembalikan "\uFFFD";
		}

		// Karakter kontrol dan angka (tergantung posisi) di-escape sebagai poin kode
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Karakter ASCII yang mungkin spesial lainnya akan di-escape dengan garis miring terbalik
	kembalikan "\\" + ch;
}

jQuery.escapeSelector = fungsi( sel ) {
	kembali ( sel + "" ).replace( rcssescape, fcssescape );
};




varpreferDoc = dokumen,
	pushNative = mendorong;

( fungsi() {

var saya,
	pengeluaran,
	Konteks terluar,
	mengurutkan masukan,
	memiliki Duplikat,
	dorong = dorongNatif,

	// Vars dokumen lokal
	dokumen,
	elemen dokumen,
	dokumenIsHTML,
	kereta QSA,
	cocok,

	// Data khusus instance
	expando = jQuery.expando,
	dirrun = 0,
	selesai = 0,
	classCache = buatCache(),
	tokenCache = buatCache(),
	compilerCache = buatCache(),
	nonnativeSelectorCache = buatCache(),
	sortOrder = fungsi( a, b ) {
		jika ( a === b ) {
			hasDuplikat = benar;
		}
		kembali 0;
	},

	booleans = "dicentang|dipilih|async|fokus otomatis|putar otomatis|kontrol|tunda|dinonaktifkan|disembunyikan|ismap|" +
		"loop|multiple|open|readonly|wajib|cakupan",

	// Ekspresi reguler

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	pengenal = "(?:\\\\[\\da-fA-F]{1,6}" + spasi +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Pemilih atribut: https://www.w3.org/TR/selectors/#attribute-selectors
	atribut = "\\[" + spasi + "*(" + pengenal + ")(?:" + spasi +

		// Operator (tangkap 2)
		"*([*^$|!~]?=)" + spasi +

		// "Nilai atribut harus berupa pengidentifikasi CSS [capture 5] atau string [capture 3 atau capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + pengenal + "))|)" +
		spasi + "*\\]",

	pseudos = ":(" + pengenal + ")(?:\\((" +

		// Untuk mengurangi jumlah penyeleksi yang memerlukan tokenisasi di praFilter, pilih argumen:
		// 1. dikutip (tangkap 3; tangkap 4 atau tangkap 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. sederhana (tangkap 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atribut + ")*)|" +

		// 3. hal lainnya (tangkap 2)
		".*" +
		")\\)|)",

	// Spasi putih di depan dan spasi di belakang yang tidak di-escape, menangkap beberapa karakter non-spasi sebelum karakter terakhir
	rwhitespace = RegExp baru( spasi + "+", "g" ),

	rcomma = RegExp baru( "^" + spasi + "*," + spasi + "*" ),
	rleadingCombinator = RegExp baru( "^" + spasi + "*([>+~]|" + spasi + ")" +
		spasi + "*" ),
	rdescend = RegExp baru( spasi + "|>" ),

	rpseudo = RegExp baru (pseudo),
	pengendara = RegExp baru( "^" + pengenal + "$" ),

	pertandinganExpr = {
		ID: RegExp baru( "^#(" + pengenal + ")" ),
		KELAS: RegExp baru( "^\\.(" + pengidentifikasi + ")" ),
		TAG: RegExp baru( "^(" + pengidentifikasi + "|[*])" ),
		ATTR: RegExp baru( "^" + atribut ),
		PSEUDO: RegExp baru( "^" + pseudos ),
		ANAK: RegExp baru(
			"^:(hanya|pertama|terakhir|n|n-terakhir)-(anak|tipe)(?:\\(" +
				spasi + "*(genap|ganjil|(([+-]|)(\\d*)n|)" + spasi + "*(?:([+-]|)" +
				spasi + "*(\\d+)|))" + spasi + "*\\)|)", "i" ),
		bool: RegExp baru( "^(?:" + boolean + ")$", "i" ),

		// Untuk digunakan di perpustakaan yang mengimplementasikan .is()
		// Kami menggunakan ini untuk pencocokan POS di `pilih`
		NeedContext: RegExp baru( "^" + spasi +
			"*[>+~]|:(genap|ganjil|eq|gt|lt|nth|pertama|terakhir)(?:\\(" + spasi +
			"*((?:-\\d)?\\d*)" + spasi + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|pilih|area teks|tombol)$/i,
	rheader = /^h\d$/i,

	// Pemilih ID atau TAG atau CLASS yang mudah diurai/diambil
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	saudara = /[+~]/,

	// CSS lolos
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = RegExp baru( "\\\\[\\da-fA-F]{1,6}" + spasi +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = fungsi( melarikan diri, nonHex ) {
		var tinggi = "0x" + escape.slice( 1 ) - 0x10000;

		jika ( nonHex ) {

			// Hapus awalan garis miring terbalik dari rangkaian escape non-hex
			kembalikan nonHex;
		}

		// Ganti urutan escape heksadesimal dengan titik kode Unicode yang disandikan
		// Dukungan: YAITU <=11+
		// Untuk nilai di luar Basic Multilingual Plane (BMP), buat a
		// pasangan pengganti
		kembali tinggi < 0 ?
			String.fromCharCode( tinggi + 0x10000 ) :
			String.fromCharCode( tinggi >> 10 | 0xD800, tinggi & 0x3FF | 0xDC00 );
	},

	// Digunakan untuk iframe; lihat `setDokumen`.
	// Dukungan: YAITU 9 - 11+, Edge 12 - 18+
	// Menghapus pembungkus fungsi menyebabkan "Izin Ditolak"
	// kesalahan di IE/Edge.
	unloadHandler = fungsi() {
		setDokumen();
	},

	inDisabledFieldset = tambahkanCombinator(
		fungsi( elemen ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", selanjutnya: "legenda" }
	);

// Dukungan: IE <=9 saja
// Mengakses document.activeElement dapat terjadi secara tidak terduga
// https://bugs.jquery.com/ticket/13393
fungsi amanActiveElement() {
	mencoba {
		mengembalikan dokumen.activeElement;
	} menangkap ( salah ) {}
}

// Optimalkan untuk push.apply( _, NodeList )
mencoba {
	push.apply(
		( arr = irisan.panggilan( pilihanDoc.childNodes ) ),
		pilihanDoc.childNodes
	);

	// Dukungan: Android <=4.0
	// Mendeteksi push.apply yang gagal secara diam-diam
	// eslint-disable-baris berikutnya tanpa ekspresi yang tidak digunakan
	arr[ pilihanDoc.childNodes.length ].nodeType;
} menangkap ( e ) {
	dorongan = {
		terapkan: fungsi( target, els ) {
			pushNative.apply( target, irisan.panggilan( els ) );
		},
		panggilan: fungsi( target ) {
			pushNative.apply( target, irisan.panggilan( argumen, 1 ) );
		}
	};
}

fungsi find( pemilih, konteks, hasil, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = konteks && konteks.pemilikDokumen,

		// nodeType defaultnya adalah 9, karena konteksnya defaultnya adalah dokumen
		nodeType = konteks? konteks.nodeType : 9;

	hasil = hasil || [];

	// Kembali lebih awal dari panggilan dengan pemilih atau konteks yang tidak valid
	if ( typeof selector !== "string" || !selector ||
		tipe node !== 1 && tipe node !== 9 && tipe node !== 11 ) {

		mengembalikan hasil;
	}

	// Cobalah untuk melakukan operasi pencarian pintasan (bukan filter) dalam dokumen HTML
	jika ( !benih ) {
		setDokumen( konteks );
		konteks = konteks || dokumen;

		jika ( dokumenIsHTML ) {

			// Jika pemilihnya cukup sederhana, coba gunakan metode DOM "get*By*".
			// (kecuali konteks DocumentFragment, yang metodenya tidak ada)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// pemilih ID
				jika ( ( m = cocok[ 1 ] ) ) {

					// Konteks dokumen
					jika ( tipe simpul === 9 ) {
						if ( ( elem = konteks.getElementById( m ) ) ) {

							// Dukungan: IE 9 saja
							// getElementById bisa mencocokkan elemen berdasarkan nama, bukan ID
							if ( elem.id === m ) {
								push.call( hasil, elemen );
								mengembalikan hasil;
							}
						} kalau tidak {
							mengembalikan hasil;
						}

					// Konteks elemen
					} kalau tidak {

						// Dukungan: IE 9 saja
						// getElementById bisa mencocokkan elemen berdasarkan nama, bukan ID
						jika ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( konteks, elemen ) &&
							elem.id === m ) {

							push.call( hasil, elemen );
							mengembalikan hasil;
						}
					}

				// Ketik pemilih
				} else if ( cocok dengan[ 2 ] ) {
					push.apply( hasil, konteks.getElementsByTagName( pemilih ) );
					mengembalikan hasil;

				// Pemilih kelas
				} else if ( ( m = cocok[ 3 ] ) && konteks.getElementsByClassName ) {
					push.apply( hasil, konteks.getElementsByClassName( m ) );
					mengembalikan hasil;
				}
			}

			// Manfaatkan querySelectorAll
			if ( !nonnativeSelectorCache[ pemilih + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( pemilih ) ) ) {

				newSelector = pemilih;
				newContext = konteks;

				// qSA mempertimbangkan elemen di luar root pelingkupan saat mengevaluasi turunan atau
				// kombinator turunan, yang bukan itu yang kita inginkan.
				// Dalam kasus seperti ini, kita menyiasati perilaku tersebut dengan memberi awalan pada setiap pemilih di
				// daftar dengan pemilih ID yang merujuk pada konteks cakupan.
				// Teknik ini juga harus digunakan ketika kombinator terdepan digunakan
				// karena penyeleksi tersebut tidak dikenali oleh querySelectorAll.
				// Terima kasih kepada Andrew Dupont untuk teknik ini.
				jika ( tipe node === 1 &&
					( rdescend.test( pemilih ) || rleadingCombinator.test( pemilih ) ) ) {

					// Perluas konteks untuk penyeleksi saudara
					newContext = rsibling.test( pemilih ) && testContext( konteks.parentNode ) ||
						konteks;

					// Kita bisa menggunakan :scope sebagai pengganti ID hack jika browser
					// mendukungnya & jika kita tidak mengubah konteksnya.
					// Dukungan: IE 11+, Edge 17 - 18+
					// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" ketika
					// membandingkan dua dokumen secara ketat; perbandingan dangkal berhasil.
					// eslint-disable-baris berikutnya eqeqeq
					jika ( newContext != konteks || !support.scope ) {

						// Tangkap ID konteks, atur terlebih dahulu jika perlu
						if ( ( nid = konteks.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} kalau tidak {
							konteks.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Awali setiap pemilih dalam daftar
					grup = tokenize( pemilih );
					i = grup.panjang;
					ketika saya-- ) {
						grup[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( grup[ i ] );
					}
					newSelector = grup.join( "," );
				}

				mencoba {
					push.apply( hasil,
						newContext.querySelectorAll( newSelector )
					);
					mengembalikan hasil;
				} tangkapan ( qsaError ) {
					nonnativeSelectorCache( pemilih, benar );
				} Akhirnya {
					jika ( nid === perluas ) {
						konteks.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Semua yang lain
	kembali pilih( selector.replace( rtrimCSS, "$1" ), konteks, hasil, seed );
}

/**
 * Buat cache nilai kunci dengan ukuran terbatas
 * @returns {function(string, object)} Mengembalikan data Objek setelah menyimpannya sendiri
 * nama properti string (dengan akhiran spasi) dan (jika cache lebih besar dari Expr.cacheLength)
 * menghapus entri terlama
 */
fungsi buatCache() {
	kunci var = [];

	cache fungsi (kunci, nilai) {

		// Gunakan (kunci + " ") untuk menghindari tabrakan dengan properti prototipe asli
		// (lihat https://github.com/jquery/sizzle/issues/157)
		if ( kunci.push( kunci + " " ) > Expr.cacheLength ) {

			// Hanya simpan entri terbaru
			hapus cache[keys.shift() ];
		}
		kembali (cache[kunci + " " ] = nilai );
	}
	kembalikan cache;
}

/**
 * Tandai fungsi untuk penggunaan khusus oleh modul pemilih jQuery
 * @param {Function} fn Fungsi untuk menandai
 */
tanda fungsiFungsi( fn ) {
	fn[ memperluas ] = benar;
	kembali fn;
}

/**
 * Dukungan pengujian menggunakan elemen
 * @param {Function} fn Melewati elemen yang dibuat dan mengembalikan hasil boolean
 */
fungsi menegaskan( fn ) {
	var el = document.createElement( "fieldset" );

	mencoba {
		kembali !!fn( el );
	} menangkap ( e ) {
		kembali salah;
	} Akhirnya {

		// Hapus dari induknya secara default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// lepaskan memori di IE
		el = batal;
	}
}

/**
 * Mengembalikan fungsi yang akan digunakan dalam pseudos untuk tipe input
 * Tipe @param {String}
 */
fungsi buatInputPseudo( tipe ) {
	fungsi kembali ( elemen ) {
		return nodeName( elem, "input" ) && elem.type === ketik;
	};
}

/**
 * Mengembalikan fungsi yang akan digunakan dalam pseudos untuk tombol
 * Tipe @param {String}
 */
fungsi createButtonPseudo( mengetik ) {
	fungsi kembali ( elemen ) {
		kembali ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elemen.type === tipe;
	};
}

/**
 * Mengembalikan fungsi yang akan digunakan dalam pseudos untuk :enabled/:disabled
 * @param {Boolean} dinonaktifkan benar untuk :disabled; salah untuk :diaktifkan
 */
fungsi createDisabledPseudo( dinonaktifkan ) {

	// Dikenal :dinonaktifkan positif palsu: fieldset[dinonaktifkan] > legenda:nth-of-type(n+2) :can-disable
	fungsi kembali ( elemen ) {

		// Hanya elemen tertentu yang bisa cocok dengan :enabled atau :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("bentuk" dalam elemen ) {

			// Periksa kecacatan bawaan pada elemen non-penyandang cacat yang relevan:
			// * mencantumkan elemen terkait formulir dalam kumpulan bidang yang dinonaktifkan
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elemen opsi dalam optgroup yang dinonaktifkan
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Semua elemen tersebut memiliki properti "form".
			if ( elem.parentNode && elem.disabled === false ) {

				// Elemen opsi tunduk pada optgroup induk jika ada
				if ("label" di elemen ) {
					if ("label" di elem.parentNode ) {
						return elem.parentNode.disabled === dinonaktifkan;
					} kalau tidak {
						return elem.disabled === dinonaktifkan;
					}
				}

				// Dukungan: YAITU 6 - 11+
				// Gunakan properti pintasan isDisabled untuk memeriksa leluhur kumpulan bidang yang dinonaktifkan
				kembalikan elem.isDisabled === dinonaktifkan ||

					// Jika tidak ada isDisabled, periksa secara manual
					elem.isDisabled !== !dinonaktifkan &&
						inDisabledFieldset( elem ) === dinonaktifkan;
			}

			return elem.disabled === dinonaktifkan;

		// Cobalah untuk menyaring elemen yang tidak dapat dinonaktifkan sebelum mempercayai properti yang dinonaktifkan.
		// Beberapa korban terjebak dalam jaring kami (label, legenda, menu, track), padahal seharusnya tidak
		// bahkan ada pada mereka, apalagi memiliki nilai boolean.
		} else if ("label" pada elemen ) {
			return elem.disabled === dinonaktifkan;
		}

		// Elemen yang tersisa tidak :enabled atau :disabled
		kembali salah;
	};
}

/**
 * Mengembalikan fungsi yang akan digunakan dalam pseudos untuk posisional
 * @param {Fungsi} fn
 */
fungsi membuatPosisionalPseudo( fn ) {
	kembalikan markFunction( fungsi( argumen ) {
		argumen = +argumen;
		return markFunction( function( seed, match ) {
			var j,
				matchIndexes = fn( [], seed.length, argumen ),
				i = matchIndexes.panjang;

			// Cocokkan elemen yang ditemukan pada indeks yang ditentukan
			ketika saya-- ) {
				jika ( benih[ ( j = indeks kecocokan[ i ] ) ] ) {
					benih[ j ] = !( cocok[ j ] = benih[ j ] );
				}
			}
		} );
	} );
}

/**
 * Memeriksa validitas node sebagai konteks pemilih jQuery
 * @param {Elemen|Objek=} konteks
 * @returns {Element|Object|Boolean} Node masukan jika dapat diterima, jika tidak maka nilainya salah
 */
fungsi testContext( konteks ) {
	kembalikan konteks && typeof konteks.getElementsByTagName !== "tidak terdefinisi" && konteks;
}

/**
 * Menetapkan variabel terkait dokumen satu kali berdasarkan dokumen saat ini
 * @param {Element|Object} [node] Elemen atau objek dokumen yang digunakan untuk mengatur dokumen
 * @returns {Object} Mengembalikan dokumen saat ini
 */
fungsi setDokumen( simpul ) {
	var subJendela,
		dok = simpul? simpul.pemilikDokumen || simpul : dokumen pilihan;

	// Kembalikan lebih awal jika dokumen tidak valid atau sudah dipilih
	// Dukungan: IE 11+, Edge 17 - 18+
	// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
	// dua dokumen; perbandingan dangkal berhasil.
	// eslint-disable-baris berikutnya eqeqeq
	jika ( doc == dokumen || doc.nodeType !== 9 || !doc.documentElement ) {
		dokumen pengembalian;
	}

	// Perbarui variabel global
	dokumen = dokumen;
	documentElement = dokumen.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( dokumen );

	// Dukungan: Khusus iOS 7, IE 9 - 11+
	// Browser lama tidak mendukung `kecocokan` tanpa awalan.
	cocok = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Dukungan: YAITU 9 - 11+, Edge 12 - 18+
	// Mengakses dokumen iframe setelah unload menimbulkan kesalahan "izin ditolak" (lihat trac-13936)
	// Dukungan: IE 11+, Edge 17 - 18+
	// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
	// dua dokumen; perbandingan dangkal berhasil.
	// eslint-disable-baris berikutnya eqeqeq
	jika (preferDoc!= dokumen &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Dukungan: YAITU 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "bongkar", unloadHandler );
	}

	// Dukungan: YAITU <10
	// Periksa apakah getElementById mengembalikan elemen berdasarkan nama
	// Metode getElementById yang rusak tidak mengambil nama yang ditetapkan secara terprogram,
	// jadi gunakan tes getElementsByName secara tidak langsung
	support.getById = menegaskan( fungsi( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		kembalikan !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).panjang;
	} );

	// Dukungan: IE 9 saja
	// Periksa apakah mungkin untuk melakukan matchSelector
	// pada node yang terputus.
	support.disconnectedMatch = menegaskan( fungsi( el ) {
		return match.call( el, "*" );
	} );

	// Dukungan: YAITU 9 - 11+, Edge 12 - 18+
	// IE/Edge tidak mendukung kelas semu :scope.
	dukungan.ruang lingkup = menegaskan( fungsi() {
		return document.querySelectorAll( ":scope" );
	} );

	// Dukungan: Chrome 105 - 111 saja, Safari 15.4 - 16.3 saja
	// Pastikan argumen `:has()` diurai tanpa ampun.
	// Kami menyertakan `*` dalam pengujian untuk mendeteksi implementasi yang bermasalah
	// _selektif_ pemaaf (khususnya jika daftarnya mencakup setidaknya
	// satu pemilih yang valid).
	// Perhatikan bahwa kami menganggap kurangnya dukungan untuk `:has()` seolah-olah memang demikian
	// dukungan yang sesuai spesifikasi, yang baik-baik saja karena penggunaan `:has()` seperti itu
	// lingkungan akan gagal di jalur qSA dan kembali ke traversal jQuery
	// Bagaimanapun.
	support.cssHas = menegaskan( fungsi() {
		mencoba {
			dokumen.querySelector( ":has(*,:jqfake)" );
			kembali salah;
		} menangkap ( e ) {
			kembali benar;
		}
	} );

	// Filter ID dan temukan
	jika ( support.getById ) {
		Expr.filter.ID = fungsi( id ) {
			var attrId = id.replace( runescape, funescape );
			fungsi kembali ( elemen ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = fungsi( id, konteks ) {
			if ( typeof konteks.getElementById !== "tidak terdefinisi" && documentIsHTML ) {
				var elem = konteks.getElementById( id );
				mengembalikan elemen? [ elemen ] : [];
			}
		};
	} kalau tidak {
		Expr.filter.ID = fungsi( id ) {
			var attrId = id.replace( runescape, funescape );
			fungsi kembali ( elemen ) {
				var node = typeof elem.getAttributeNode !== "tidak terdefinisi" &&
					elem.getAttributeNode( "id" );
				kembalikan simpul && simpul.nilai === attrId;
			};
		};

		// Dukungan: IE 6 - 7 saja
		// getElementById tidak dapat diandalkan sebagai pintasan pencarian
		Expr.find.ID = fungsi( id, konteks ) {
			if ( typeof konteks.getElementById !== "tidak terdefinisi" && documentIsHTML ) {
				var node, i, elemen,
					elem = konteks.getElementById( id );

				jika ( elemen ) {

					// Verifikasi atribut id
					simpul = elem.getAttributeNode( "id" );
					if ( simpul && simpul.nilai === id ) {
						kembali [ elemen ];
					}

					// Kembali ke getElementsByName
					elemen = konteks.getElementsByName( id );
					saya = 0;
					while ( ( elemen = elemen[ i++ ] ) ) {
						simpul = elem.getAttributeNode( "id" );
						if ( simpul && simpul.nilai === id ) {
							kembali [ elemen ];
						}
					}
				}

				kembali [];
			}
		};
	}

	// Tandai
	Expr.find.TAG = fungsi( tag, konteks ) {
		if ( typeof konteks.getElementsByTagName !== "tidak terdefinisi" ) {
			kembalikan konteks.getElementsByTagName( tag );

		// Node DocumentFragment tidak memiliki gEBTN
		} kalau tidak {
			kembalikan konteks.querySelectorAll( tag );
		}
	};

	// Kelas
	Expr.find.CLASS = fungsi( nama kelas, konteks ) {
		if ( typeof konteks.getElementsByClassName !== "tidak terdefinisi" && documentIsHTML ) {
			kembalikan konteks.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	--------------------------------------------------- -------------------- */

	// Dukungan QSA dan matchSelector

	rbuggyQSA = [];

	// Membangun ekspresi reguler QSA
	// Strategi Regex diadopsi dari Diego Perini
	menegaskan( fungsi( el ) {

		masukan var;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' dinonaktifkan='disabled'></a>" +
			"<pilih id='" + expando + "-\r\\' dinonaktifkan='dinonaktifkan'>" +
			"<opsi yang dipilih=''></option></select>";

		// Dukungan: iOS <=7 - 8 saja
		// Atribut Boolean dan "nilai" tidak diperlakukan dengan benar di beberapa dokumen XML
		if ( !el.querySelectorAll( "[dipilih]" ).panjang ) {
			rbuggyQSA.push( "\\[" + spasi + "*(?:nilai|" + boolean + ")" );
		}

		// Dukungan: iOS <=7 - 8 saja
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Dukungan: hanya iOS 8
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// `selector#id sibling-combinator selector` dalam halaman gagal
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Dukungan: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Pada beberapa jenis dokumen, penyeleksi ini tidak akan bekerja secara asli.
		// Ini mungkin OK tapi untuk kompatibilitas ke belakang kami ingin mempertahankannya
		// menanganinya melalui traversal jQuery di jQuery 3.x.
		if ( !el.querySelectorAll( ":dicentang" ).panjang ) {
			rbuggyQSA.push( ":dicentang" );
		}

		// Dukungan: Aplikasi Asli Windows 8
		// Atribut tipe dan nama dibatasi selama penugasan .innerHTML
		masukan = dokumen.createElement( "masukan" );
		input.setAttribute( "ketik", "tersembunyi" );
		el.appendChild( masukan ).setAttribute( "nama", "D" );

		// Dukungan: YAITU 9 - 11+
		// Pemilih :disabled di IE tidak mengambil turunan dari kumpulan bidang yang dinonaktifkan
		// Dukungan: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Pada beberapa jenis dokumen, penyeleksi ini tidak akan bekerja secara asli.
		// Ini mungkin OK tapi untuk kompatibilitas ke belakang kami ingin mempertahankannya
		// menanganinya melalui traversal jQuery di jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).panjang !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Dukungan: IE 11+, Edge 15 - 18+
		// IE 11/Edge tidak menemukan elemen pada kueri `[nama='']` dalam beberapa kasus.
		// Menambahkan atribut sementara ke dokumen sebelum seleksi berhasil
		// seputar masalah ini.
		// Menariknya, IE 10 dan versi lebih lama tampaknya tidak mengalami masalah tersebut.
		masukan = dokumen.createElement( "masukan" );
		input.setAttribute("nama", "" );
		el.appendChild( masukan );
		if ( !el.querySelectorAll( "[nama='']" ).panjang ) {
			rbuggyQSA.push( "\\[" + spasi + "*nama" + spasi + "*=" +
				spasi + "*(?:''|\"\")" );
		}
	} );

	jika ( !support.cssHas ) {

		// Dukungan: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Mekanisme `coba-tangkap` reguler kami gagal mendeteksi yang tidak didukung secara asli
		// kelas semu di dalam `:has()` (seperti `:has(:contains("Foo"))`)
		// di browser yang mengurai argumen `:has()` sebagai daftar pemilih yang memaafkan.
		// https://drafts.csswg.org/selectors/#relational sekarang memerlukan argumen
		// untuk diurai tanpa ampun, namun browser belum sepenuhnya disesuaikan.
		rbuggyQSA.push( ":memiliki" );
	}

	rbuggyQSA = rbuggyQSA.panjang && RegExp baru( rbuggyQSA.join( "|" ) );

	/* Menyortir
	--------------------------------------------------- -------------------- */

	// Penyortiran pesanan dokumen
	sortOrder = fungsi( a, b ) {

		// Tandai untuk penghapusan duplikat
		jika ( a === b ) {
			hasDuplikat = benar;
			kembali 0;
		}

		// Urutkan berdasarkan keberadaan metode jika hanya satu input yang memiliki perbandinganDocumentPosition
		var bandingkan = !a.compareDocumentPosition - !b.compareDocumentPosition;
		jika ( bandingkan ) {
			perbandingan kembali;
		}

		// Hitung posisi jika kedua input berasal dari dokumen yang sama
		// Dukungan: IE 11+, Edge 17 - 18+
		// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
		// dua dokumen; perbandingan dangkal berhasil.
		// eslint-disable-baris berikutnya eqeqeq
		bandingkan = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Kalau tidak, kita tahu mereka tidak terhubung
			1;

		// Node terputus
		jika ( bandingkan & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === bandingkan ) ) {

			// Pilih elemen pertama yang berhubungan dengan dokumen pilihan kita
			// Dukungan: IE 11+, Edge 17 - 18+
			// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
			// dua dokumen; perbandingan dangkal berhasil.
			// eslint-disable-baris berikutnya eqeqeq
			if ( a === dokumen || a.ownerDocument == dokumen pilihan &&
				temukan.berisi( dokumen pilihan, a ) ) {
				kembali -1;
			}

			// Dukungan: IE 11+, Edge 17 - 18+
			// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
			// dua dokumen; perbandingan dangkal berhasil.
			// eslint-disable-baris berikutnya eqeqeq
			if ( b === dokumen || b.ownerDocument == dokumen pilihan &&
				temukan.berisi( dokumen pilihan, b ) ) {
				kembali 1;
			}

			// Pertahankan urutan awal
			kembalikan sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		kembali bandingkan & 4 ? -1 : 1;
	};

	dokumen pengembalian;
}

temukan.cocok = fungsi( expr, elemen ) {
	kembali temukan( expr, null, null, elemen );
};

find.matchesSelector = fungsi( elem, expr ) {
	setDokumen( elemen );

	jika (dokumenIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		mencoba {
			var ret = cocok.panggilan( elem, expr );

			// matchSelector IE 9 mengembalikan false pada node yang terputus
			jika ( ret || support.disconnectedMatch ||

					// Selain itu, node yang terputus dikatakan ada di dalam dokumen
					// fragmen di IE 9
					elem.dokumen && elem.document.nodeType !== 11 ) {
				kembali mundur;
			}
		} menangkap ( e ) {
			nonnativeSelectorCache( expr, benar );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( konteks, elemen ) {

	// Tetapkan vars dokumen jika diperlukan
	// Dukungan: IE 11+, Edge 17 - 18+
	// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
	// dua dokumen; perbandingan dangkal berhasil.
	// eslint-disable-baris berikutnya eqeqeq
	if ( ( konteks.pemilikDokumen || konteks ) != dokumen ) {
		setDokumen( konteks );
	}
	return jQuery.contains( konteks, elemen );
};


find.attr = fungsi( elemen, nama ) {

	// Tetapkan vars dokumen jika diperlukan
	// Dukungan: IE 11+, Edge 17 - 18+
	// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
	// dua dokumen; perbandingan dangkal berhasil.
	// eslint-disable-baris berikutnya eqeqeq
	if ( ( elem.ownerDocument || elem ) != dokumen ) {
		setDokumen( elemen );
	}

	var fn = Expr.attrHandle[ nama.toLowerCase() ],

		// Jangan tertipu oleh properti Object.prototype (lihat trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elemen, nama, !documentIsHTML ) :
			belum diartikan;

	jika ( val !== tidak terdefinisi ) {
		kembali val;
	}

	kembalikan elem.getAttribute( nama );
};

temukan.kesalahan = fungsi( pesan ) {
	throw new Error( "Kesalahan sintaksis, ekspresi tidak dikenal: " + pesan );
};

/**
 * Menyortir dokumen dan menghapus duplikat
 * Hasil @param {ArrayLike}
 */
jQuery.uniqueSort = fungsi( hasil ) {
	var elemen,
		duplikat = [],
		j = 0,
		saya = 0;

	// Kecuali kita *tahu* kita dapat mendeteksi duplikat, asumsikan keberadaannya
	//
	// Dukungan: Android <=4.0+
	// Pengujian untuk mendeteksi duplikat tidak dapat diprediksi, jadi anggap saja kita tidak bisa
	// bergantung pada deteksi duplikat di semua browser tanpa pengurutan yang stabil.
	hasDuplikat = !support.sortStable;
	sortInput = !support.sortStable && slice.call( hasil, 0 );
	sort.call( hasil, sortOrder );

	jika (memiliki Duplikat) {
		while ( ( elem = hasil[ i++ ] ) ) {
			if ( elem === hasil[ i ] ) {
				j = duplikat.push( i );
			}
		}
		sementara ( j-- ) {
			splice.call( hasil, duplikat[ j ], 1 );
		}
	}

	// Hapus masukan setelah mengurutkan untuk melepaskan objek
	// Lihat https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	mengembalikan hasil;
};

jQuery.fn.uniqueSort = fungsi() {
	kembalikan ini.pushStack( jQuery.uniqueSort( irisan.berlaku( ini ) ) );
};

Expr = jQuery.expr = {

	// Dapat disesuaikan oleh pengguna
	Panjang cache: 50,

	buatPseudo: fungsi tanda,

	pertandingan: pertandinganExpr,

	attrHandle: {},

	menemukan: {},

	relatif: {
		">": { dir: "parentNode", pertama: true },
		" ": { dir: "parentNode" },
		"+": { dir: "saudara sebelumnya", pertama: benar },
		"~": { dir: "saudara sebelumnya" }
	},

	prafilter: {
		ATTR: fungsi( cocok ) {
			cocokkan[ 1 ] = cocokkan[ 1 ].ganti( runescape, funescape );

			// Pindahkan nilai yang diberikan agar sesuai dengan[3] apakah diberi tanda kutip atau tidak
			pertandingan[ 3 ] = ( pertandingan[ 3 ] || pertandingan[ 4 ] || pertandingan[ 5 ] || "" )
				.replace( runescape, funescape );

			jika ( cocok[ 2 ] === "~=" ) {
				cocok[ 3 ] = " " + cocok[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		ANAK: fungsi( cocok ) {

			/* cocok dari matchExpr["CHILD"]
				1 jenis (hanya|nth|...)
				2 apa (anak|tipe)
				3 argumen (genap|ganjil|\d*|\d*n([+-]\d+)?|...)
				4 komponen xn dari argumen xn+y ([+-]?\d*n|)
				5 tanda komponen xn
				6 x komponen xn
				7 tanda komponen y
				8 y dari komponen y
			*/
			cocok[ 1 ] = cocok[ 1 ].toLowerCase();

			if ( cocok[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* memerlukan argumen
				jika ( !cocok[ 3 ] ) {
					temukan.kesalahan( cocokkan[ 0 ] );
				}

				// parameter numerik x dan y untuk Expr.filter.CHILD
				// ingat bahwa false/true masing-masing dilemparkan ke 0/1
				cocok[ 4 ] = +( cocok[ 4 ] ?
					cocokkan[ 5 ] + ( cocokkan[ 6 ] || 1 ):
					2 * ( cocok[ 3 ] === "genap" || cocok[ 3 ] === "ganjil" )
				);
				cocok[ 5 ] = +( ( cocok[ 7 ] + cocok[ 8 ] ) || cocok[ 3 ] === "ganjil" );

			// tipe lain melarang argumen
			} else if ( cocok dengan[ 3 ] ) {
				temukan.kesalahan( cocokkan[ 0 ] );
			}

			pertandingan kembali;
		},

		PSEUDO: fungsi( cocok ) {
			var kelebihan,
				tanpa tanda kutip = !cocok[ 6 ] && cocok[ 2 ];

			if ( matchExpr.CHILD.test( cocok[ 0 ] ) ) {
				kembalikan nol;
			}

			// Terima argumen yang dikutip apa adanya
			jika ( cocok dengan[ 3 ] ) {
				cocok[ 2 ] = cocok[ 4 ] || cocokkan[ 5 ] || "";

			// Hapus kelebihan karakter dari argumen yang tidak diberi tanda kutip
			} else if ( tanpa tanda kutip && rpseudo.test( tanpa tanda kutip ) &&

				// Dapatkan kelebihan dari tokenize (secara rekursif)
				( kelebihan = tokenize( tanpa tanda kutip, benar ) ) &&

				// lanjutkan ke tanda kurung penutup berikutnya
				( kelebihan = tidak dikutip.indexOf( ")", tidak dikutip.panjang - kelebihan ) - tidak dikutip.panjang ) ) {

				// kelebihan adalah indeks negatif
				cocokkan[ 0 ] = cocokkan[ 0 ].slice( 0, kelebihan );
				cocokkan[ 2 ] = tanpa tanda kutip.slice( 0, kelebihan );
			}

			// Mengembalikan hanya tangkapan yang diperlukan oleh metode filter semu (tipe dan argumen)
			kembalikan kecocokan.slice( 0, 3 );
		}
	},

	Saring: {

		label: fungsi( nodeNameSelector ) {
			var ExpectNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			kembalikan nodeNameSelector === "*" ?
				fungsi() {
					kembali benar;
				} :
				fungsi( elemen ) {
					kembalikan nodeName( elem, diharapkanNodeName );
				};
		},

		KELAS: fungsi(nama kelas) {
			var pola = classCache[namakelas + " " ];

			pola pengembalian ||
				( pola = RegExp baru( "(^|" + spasi + ")" + namakelas +
					"(" + spasi + "|$)" ) ) &&
				classCache( nama kelas, fungsi( elemen ) {
					pola kembali.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "tidak terdefinisi" &&
								elemen.getAttribute( "kelas" ) ||
							""
					);
				} );
		},

		ATTR: fungsi( nama, operator, centang ) {
			fungsi kembali ( elemen ) {
				var hasil = find.attr( elem, nama );

				jika ( hasil == nol ) {
					operator pengembalian === "!=";
				}
				jika ( !operator ) {
					kembali benar;
				}

				hasil += "";

				jika ( operator === "=" ) {
					kembalikan hasil === centang;
				}
				jika ( operator === "!=" ) {
					kembalikan hasil !== centang;
				}
				jika ( operator === "^=" ) {
					kembalikan cek && hasil.indexOf( cek ) === 0;
				}
				jika ( operator === "*=" ) {
					kembalikan cek && hasil.indexOf( cek ) > -1;
				}
				jika ( operator === "$=" ) {
					kembalikan cek && hasil.slice( -check.length ) === centang;
				}
				jika ( operator === "~=" ) {
					return( " " + hasil.ganti( rspasi, " " ) + " " )
						.indexOf( centang ) > -1;
				}
				jika ( operator === "|=" ) {
					kembalikan hasil === centang || hasil.slice( 0, cek.panjang + 1 ) === centang + "-";
				}

				kembali salah;
			};
		},

		ANAK: fungsi( ketik, apa, _argumen, pertama, terakhir ) {
			var sederhana = ketik.slice( 0, 3 ) !== "nth",
				maju = ketik.slice( -4 ) !== "terakhir",
				ofType = apa === "tipe";

			kembali dulu === 1 && terakhir === 0 ?

				// Pintasan untuk :nth-*(n)
				fungsi( elemen ) {
					kembali !!elem.parentNode;
				} :

				fungsi( elemen, _konteks, xml ) {
					var cache, outerCache, simpul, nodeIndex, mulai,
						dir = sederhana !== maju? "saudara berikutnya" : "saudara sebelumnya",
						induk = elemen.parentNode,
						nama = ofType && elem.nodeName.toLowerCase(),
						gunakanCache = !xml && !ofType,
						perbedaan = salah;

					jika (orang tua) {

						// :(pertama|terakhir|hanya)-(anak|tipe)
						jika (sederhana) {
							sementara ( dir ) {
								simpul = elemen;
								while ( ( simpul = simpul[ dir ] ) ) {
									jika (dariJenis?
										nama simpul( simpul, nama ) :
										node.nodeType === 1 ) {

										kembali salah;
									}
								}

								// Membalikkan arah untuk :only-* (jika kita belum melakukannya)
								mulai = dir = ketik === "hanya" && !mulai && "saudara berikutnya";
							}
							kembali benar;
						}

						mulai = [ maju ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) menyimpan data cache pada `induk`
						jika ( meneruskan && menggunakanCache ) {

							// Cari `elem` dari indeks yang di-cache sebelumnya
							outerCache = induk[expando ] || ( induk[expando ] = {} );
							cache = outerCache[ ketik ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = indeks node && cache[ 2 ];
							simpul = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( simpul = ++nodeIndex && simpul && simpul[ dir ] ||

								// Penggantian untuk mencari `elem` dari awal
								( diff = nodeIndex = 0 ) || mulai.pop() ) ) {

								// Saat ditemukan, cache mengindeks pada `induk` dan rusak
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ tipe ] = [ dirruns, nodeIndex, diff ];
									merusak;
								}
							}

						} kalau tidak {

							// Gunakan indeks elemen yang di-cache sebelumnya jika tersedia
							jika ( gunakanCache ) {
								outerCache = elemen[ perluas ] || ( elemen[ perluas ] = {} );
								cache = outerCache[ ketik ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = indeks simpul;
							}

							// xml :anak ke-n(...)
							// atau :nth-last-child(...) atau :nth(-last)?-of-type(...)
							jika ( berbeda === salah ) {

								// Gunakan loop yang sama seperti di atas untuk mencari `elem` dari awal
								while ( ( simpul = ++nodeIndex && simpul && simpul[ dir ] ||
									( diff = nodeIndex = 0 ) || mulai.pop() ) ) {

									jika ( (dariJenis ?
										nama simpul( simpul, nama ) :
										simpul.nodeType === 1 ) &&
										++perbedaan ) {

										// Cache indeks setiap elemen yang ditemukan
										jika ( gunakanCache ) {
											outerCache = simpul[ekspansi ] ||
												( simpul[ memperluas ] = {} );
											outerCache[ ketik ] = [ dirruns, diff ];
										}

										jika ( simpul === elemen ) {
											merusak;
										}
									}
								}
							}
						}

						// Gabungkan offset, lalu periksa ukuran siklus
						diff -= terakhir;
						kembalikan perbedaan === pertama || ( diff % pertama === 0 && diff / pertama >= 0 );
					}
				};
		},

		PSEUDO: fungsi( semu, argumen ) {

			// nama kelas semu tidak membedakan huruf besar-kecil
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritaskan berdasarkan sensitivitas huruf besar-kecil jika pseudo khusus ditambahkan dengan huruf besar
			// Ingatlah bahwa setFilters mewarisi dari pseudos
			var argumen,
				fn = Expr.pseudos[ semu ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error("pseudo tidak didukung: " + pseudo );

			// Pengguna dapat menggunakan createPseudo untuk menunjukkan hal itu
			// argumen diperlukan untuk membuat fungsi filter
			// sama seperti yang dilakukan jQuery
			jika ( fn[ perluas ] ) {
				kembali fn( argumen );
			}

			// Tapi tetap pertahankan dukungan untuk tanda tangan lama
			jika ( fn.panjang > 1 ) {
				args = [ semu, semu, "", argumen ];
				kembalikan Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( benih, kecocokan ) {
						var idx,
							cocok = fn( benih, argumen ),
							i = cocok.panjang;
						ketika saya-- ) {
							idx = indexOf.call( benih, cocok[ i ] );
							benih[ idx ] = !( cocok[ idx ] = cocok[ i ] );
						}
					} ):
					fungsi( elemen ) {
						kembalikan fn( elemen, 0, argumen );
					};
			}

			kembali fn;
		}
	},

	semu: {

		// Pseudo yang berpotensi rumit
		bukan: markFunction( function( selector ) {

			// Pangkas pemilih yang diteruskan untuk dikompilasi
			// untuk menghindari perlakuan awal dan akhir
			// spasi sebagai kombinator
			masukan var = [],
				hasil = [],
				matcher = kompilasi( selector.replace( rtrimCSS, "$1" ) );

			kembalikan pencocokan [expando]?
				markFunction( function( seed, match, _context, xml ) {
					var elemen,
						tak tertandingi = matcher( seed, null, xml, [] ),
						i = benih.panjang;

					// Mencocokkan elemen yang tidak cocok dengan `matcher`
					ketika saya-- ) {
						if ( ( elem = tak tertandingi[ i ] ) ) {
							benih[ i ] = !( cocok dengan[ i ] = elem );
						}
					}
				} ):
				fungsi( elemen, _konteks, xml ) {
					masukan[ 0 ] = elemen;
					matcher( masukan, null, xml, hasil );

					// Jangan simpan elemennya
					// (lihat https://github.com/jquery/sizzle/issues/299)
					masukan[ 0 ] = nol;
					kembalikan !hasil.pop();
				};
		} ),

		memiliki: markFunction( function( selector ) {
			fungsi kembali ( elemen ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		berisi: markFunction( function( teks ) {
			teks = teks.ganti( runescape, funescape );
			fungsi kembali ( elemen ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Apakah suatu elemen diwakili oleh pemilih :lang()
		// hanya didasarkan pada nilai bahasa elemen
		// sama dengan pengenal C,
		// atau diawali dengan identifier C langsung diikuti dengan "-".
		// Pencocokan C dengan nilai bahasa elemen dilakukan tanpa membedakan huruf besar dan kecil.
		// Pengidentifikasi C tidak harus berupa nama bahasa yang valid."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( fungsi( lang ) {

			// nilai lang harus berupa pengenal yang valid
			if ( !ridentifier.test( lang || "" ) ) {
				find.error("lang tidak didukung: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			fungsi kembali ( elemen ) {
				var elemenLang;
				Mengerjakan {
					jika ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						kembalikan elemenLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				kembali salah;
			};
		} ),

		// Aneka ragam
		target: fungsi( elemen ) {
			var hash = jendela.lokasi && jendela.lokasi.hash;
			kembalikan hash && hash.slice( 1 ) === elem.id;
		},

		akar: fungsi( elemen ) {
			kembalikan elemen === documentElement;
		},

		fokus: fungsi( elemen ) {
			kembalikan elemen === safeActiveElement() &&
				dokumen.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Properti Boolean
		diaktifkan: createDisabledPseudo( salah ),
		dinonaktifkan: createDisabledPseudo( benar ),

		diperiksa: fungsi( elemen ) {

			// Dalam CSS3, :checked harus mengembalikan elemen yang dicentang dan dipilih
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			kembali ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		dipilih: fungsi( elemen ) {

			// Dukungan: YAITU <=11+
			// Mengakses properti SelectIndex
			// memaksa browser untuk memperlakukan opsi default sebagai
			// dipilih ketika berada dalam optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-baris berikutnya tanpa ekspresi yang tidak digunakan
				elem.parentNode.selectedIndex;
			}

			return elem.dipilih === benar;
		},

		// Isi
		kosong: fungsi( elemen ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty dinegasikan oleh elemen (1) atau node konten (teks: 3; cdata: 4; referensi entitas: 5),
			// tetapi tidak oleh orang lain (komentar: 8; instruksi pemrosesan: 7; dll.)
			// nodeType < 6 berfungsi karena atribut (2) tidak muncul sebagai turunan
			untuk ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					kembali salah;
				}
			}
			kembali benar;
		},

		induk: fungsi( elemen ) {
			return !Expr.pseudos.empty( elem );
		},

		// Elemen/tipe masukan
		tajuk: fungsi( elemen ) {
			return rheader.test( elem.nodeName );
		},

		masukan: fungsi( elemen ) {
			return rinputs.test( elem.nodeName );
		},

		tombol: fungsi( elemen ) {
			return nodeName( elem, "input" ) && elem.type === "tombol" ||
				nodeName( elemen, "tombol" );
		},

		teks: fungsi( elemen ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "teks" &&

				// Dukungan: IE <10 saja
				// Nilai atribut HTML5 baru (misalnya, "penelusuran") muncul
				// dengan elem.type === "teks"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "teks" );
		},

		// Posisi dalam koleksi
		pertama: createPositionalPseudo( function() {
			kembali [ 0 ];
		} ),

		terakhir: createPositionalPseudo( function( _matchIndexes, length ) {
			kembali [ panjang - 1 ];
		} ),

		persamaan: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			kembali [ argumen < 0 ? argumen + panjang : argumen ];
		} ),

		genap: createPositionalPseudo( function( matchIndexes, length ) {
			var saya = 0;
			untuk ( ; saya < panjang; saya += 2 ) {
				matchIndexes.push( i );
			}
			kembalikan indeks kecocokan;
		} ),

		ganjil: createPositionalPseudo( function( matchIndexes, length ) {
			var saya = 1;
			untuk ( ; saya < panjang; saya += 2 ) {
				matchIndexes.push( i );
			}
			kembalikan indeks kecocokan;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var saya;

			jika ( argumen < 0 ) {
				i = argumen + panjang;
			} else if ( argumen > panjang ) {
				saya = panjang;
			} kalau tidak {
				saya = argumen;
			}

			untuk ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			kembalikan indeks kecocokan;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argumen < 0 ? argumen + panjang : argumen;
			untuk ( ; ++i < panjang; ) {
				matchIndexes.push( i );
			}
			kembalikan indeks kecocokan;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Tambahkan tombol/tipe input semu
untuk ( i di { radio: benar, kotak centang: benar, file: benar, kata sandi: benar, gambar: benar } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
untuk ( i di { kirim: benar, setel ulang: benar } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API mudah untuk membuat setFilter baru
fungsi setFilter() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = setFilters baru();

fungsi tokenize( pemilih, parseOnly ) {
	var cocok, cocok, token, mengetik,
		sejauh ini, grup, praFilter,
		di-cache = tokenCache[pemilih + " " ];

	jika ( di-cache ) {
		kembalikan parseOnly ? 0 : di-cache.slice( 0 );
	}

	sejauh ini = pemilih;
	grup = [];
	praFilter = Expr.preFilter;

	sementara ( sejauh ini ) {

		// Koma dan dijalankan pertama kali
		if ( !matched || ( match = rcomma.exec( sejauh ini ) ) ) {
			jika ( cocok ) {

				// Jangan gunakan tanda koma di akhir sebagai valid
				soFar = soFar.slice( cocokkan[ 0 ].panjang ) || sejauh ini;
			}
			grup.push( ( token = [] ) );
		}

		cocok = salah;

		// Kombinator
		if ( ( cocok = rleadingCombinator.exec( sejauh ini ) ) ) {
			cocok = cocok.shift();
			token.push( {
				nilai: cocok,

				// Keluarkan kombinator turunan ke luar angkasa
				ketik: cocokkan[ 0 ].ganti( rtrimCSS, " " )
			} );
			soFar = soFar.slice( cocok.panjang );
		}

		// Filter
		untuk ( ketik Expr.filter ) {
			if ( ( match = matchExpr[ ketik ].exec( sejauh ini ) ) && ( !preFilters[ ketik ] ||
				( cocok = praFilter[ ketik ]( cocok ) ) ) ) {
				cocok = cocok.shift();
				token.push( {
					nilai: cocok,
					tipe: tipe,
					cocok: cocok
				} );
				soFar = soFar.slice( cocok.panjang );
			}
		}

		jika ( !cocok ) {
			merusak;
		}
	}

	// Mengembalikan panjang kelebihan yang tidak valid
	// jika kita hanya menguraikan
	// Jika tidak, lakukan kesalahan atau kembalikan token
	jika ( hanya parse ) {
		kembali sejauh ini.panjang;
	}

	kembali sejauh ini?
		find.error( pemilih ):

		// Simpan token dalam cache
		tokenCache( pemilih, grup ).slice( 0 );
}

fungsi toSelector( token ) {
	var saya = 0,
		len = token.panjang,
		pemilih = "";
	untuk ( ; saya < len; saya++ ) {
		pemilih += token[ i ].value;
	}
	pemilih kembali;
}

fungsi addCombinator( pencocokan, kombinator, basis ) {
	var dir = kombinator.dir,
		lewati = kombinator.berikutnya,
		kunci = lewati || dir,
		checkNonElements = basis && kunci === "parentNode",
		selesaiNama = selesai++;

	kembalikan kombinator.pertama?

		// Periksa terhadap elemen leluhur terdekat/sebelumnya
		fungsi( elemen, konteks, xml ) {
			while ( ( elemen = elemen[ dir ] ) ) {
				jika ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, konteks, xml );
				}
			}
			kembali salah;
		} :

		// Periksa terhadap semua elemen leluhur/sebelumnya
		fungsi( elemen, konteks, xml ) {
			var oldCache, luarCache,
				newCache = [ dirruns, nama selesai ];

			// Kita tidak bisa menyetel data sembarangan pada node XML, sehingga node tersebut tidak mendapat manfaat dari cache kombinator
			jika ( xml ) {
				while ( ( elemen = elemen[ dir ] ) ) {
					jika ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, konteks, xml ) ) {
							kembali benar;
						}
					}
				}
			} kalau tidak {
				while ( ( elemen = elemen[ dir ] ) ) {
					jika ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elemen[ perluas ] || ( elemen[ perluas ] = {} );

						if ( lewati && nodeName( elem, lewati ) ) {
							elemen = elemen[ dir ] || elemen;
						} else if ( ( oldCache = outerCache[ kunci ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === nama selesai ) {

							// Tetapkan ke newCache sehingga hasilnya disebarkan kembali ke elemen sebelumnya
							kembali ( newCache[ 2 ] = oldCache[ 2 ] );
						} kalau tidak {

							// Gunakan kembali cache baru sehingga hasilnya disebarkan kembali ke elemen sebelumnya
							outerCache[ kunci ] = newCache;

							// Kecocokan berarti kita sudah selesai; gagal berarti kita harus terus memeriksa
							if ( ( newCache[ 2 ] = matcher( elem, konteks, xml ) ) ) {
								kembali benar;
							}
						}
					}
				}
			}
			kembali salah;
		};
}

fungsi elemenMatcher( pencocokan ) {
	kembalikan matchers.length > 1 ?
		fungsi( elemen, konteks, xml ) {
			var i = pencocokan.panjang;
			ketika saya-- ) {
				if ( !matchers[ i ]( elem, konteks, xml ) ) {
					kembali salah;
				}
			}
			kembali benar;
		} :
		pencocokan[ 0 ];
}

function multipleContexts( pemilih, konteks, hasil ) {
	var saya = 0,
		len = konteks.panjang;
	untuk ( ; saya < len; saya++ ) {
		find( pemilih, konteks[ i ], hasil );
	}
	mengembalikan hasil;
}

fungsi menyingkat( tak tertandingi, peta, filter, konteks, xml ) {
	var elemen,
		baruTak tertandingi = [],
		saya = 0,
		len = tak tertandingi.panjangnya,
		dipetakan = peta != null;

	untuk ( ; saya < len; saya++ ) {
		if ( ( elem = tak tertandingi[ i ] ) ) {
			if ( !filter || filter( elem, konteks, xml ) ) {
				newUnmatched.push( elem );
				jika ( dipetakan ) {
					peta.push( i );
				}
			}
		}
	}

	kembalikan yang baruTak tertandingi;
}

fungsi setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	jika ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher(postFilter);
	}
	jika ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, hasil, konteks, xml ) {
		var temp, i, elem, matcherOut,
			praPeta = [],
			pascaPeta = [],
			yang sudah ada sebelumnya = hasil.panjang,

			// Dapatkan elemen awal dari seed atau konteks
			elemen = benih ||
				multipleContexts( pemilih || "*",
					konteks.nodeType ? [ konteks ] : konteks, [] ),

			// Prafilter untuk mendapatkan masukan pencocokan, mempertahankan peta untuk sinkronisasi hasil benih
			matcherIn = preFilter && (seed || !selector)?
				ringkas( elems, preMap, preFilter, konteks, xml ) :
				elemen;

		if ( pencocokan ) {

			// Jika kita memiliki postFinder, atau seed yang difilter, atau postFilter non-seed
			// atau hasil yang sudah ada sebelumnya,
			matcherOut = postFinder || ( seed ? preFilter : sudah ada sebelumnya || postFilter ) ?

				// ...pemrosesan perantara diperlukan
				[] :

				// ...jika tidak, gunakan hasil secara langsung
				hasil;

			// Temukan kecocokan utama
			matcher( matcherIn, matcherOut, konteks, xml );
		} kalau tidak {
			matcherOut = matcherIn;
		}

		// Terapkan postFilter
		jika (postFilter) {
			temp = menyingkat( matcherOut, postMap );
			postFilter( suhu, [], konteks, xml );

			// Hapus kecocokan elemen yang gagal dengan memindahkannya kembali ke matcherIn
			i = suhu.panjang;
			ketika saya-- ) {
				jika ( ( elemen = suhu[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		jika ( benih ) {
			if ( postFinder || praFilter ) {
				jika ( postFinder ) {

					// Dapatkan matcherOut terakhir dengan memadatkan perantara ini ke dalam konteks postFinder
					suhu = [];
					i = matcherOut.panjang;
					ketika saya-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Pulihkan matcherIn karena elem belum merupakan pertandingan final
							temp.push( ( matcherIn[ i ] = elemen ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Pindahkan elemen yang cocok dari seed ke hasil agar tetap tersinkronisasi
				i = matcherOut.panjang;
				ketika saya-- ) {
					jika ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						benih[ suhu ] = !( hasil[ suhu ] = elem );
					}
				}
			}

		// Tambahkan elemen ke hasil, melalui postFinder jika ditentukan
		} kalau tidak {
			matcherOut = menyingkat(
				matcherOut === hasil?
					matcherOut.splice( yang sudah ada sebelumnya, matcherOut.length ) :
					matcherOut
			);
			jika ( postFinder ) {
				postFinder( null, hasil, matcherOut, xml );
			} kalau tidak {
				push.apply( hasil, matcherOut );
			}
		}
	} );
}

fungsi matcherFromTokens( token ) {
	var checkContext, pencocokan, j,
		len = token.panjang,
		leadRelative = Expr.relative[ token[ 0 ].type ],
		implisitRelatif = Relatif terkemuka || Ekspr.relatif[ " " ],
		i = Relatif terkemuka? 1 : 0,

		// Pencocokan dasar memastikan bahwa elemen dapat dijangkau dari konteks tingkat atas
		matchContext = addCombinator( fungsi( elemen ) {
			kembalikan elemen === checkContext;
		}, implisitRelatif, benar ),
		matchAnyContext = addCombinator( fungsi( elemen ) {
			kembalikan indexOf.call( checkContext, elem ) > -1;
		}, implisitRelatif, benar ),
		pencocokan = [ fungsi( elemen, konteks, xml ) {

			// Dukungan: IE 11+, Edge 17 - 18+
			// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
			// dua dokumen; perbandingan dangkal berhasil.
			// eslint-disable-baris berikutnya eqeqeq
			var ret = ( !leadingRelative && ( xml || konteks != outermostContext ) ) || (
				( checkContext = konteks ).nodeType ?
					matchContext( elemen, konteks, xml ):
					matchAnyContext( elemen, konteks, xml ) );

			// Hindari bergantung pada elemen
			// (lihat https://github.com/jquery/sizzle/issues/299)
			checkContext = nol;
			kembali mundur;
		} ];

	untuk ( ; saya < len; saya++ ) {
		if ( ( matcher = Expr.relative[ token[ i ].type ] ) ) {
			pencocokan = [ addCombinator( elementMatcher( pencocokan ), pencocokan ) ];
		} kalau tidak {
			matcher = Expr.filter[ token[ i ].type ].apply( null, token[ i ].matches );

			// Kembalikan spesial setelah melihat pencocokan posisi
			if ( pencocokan[ perluas ] ) {

				// Temukan operator relatif berikutnya (jika ada) untuk penanganan yang tepat
				j = ++saya;
				untuk ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						merusak;
					}
				}
				kembalikan setMatcher(
					i > 1 && elementMatcher( pencocokan ),
					i > 1 && kePemilih(

						// Jika token sebelumnya adalah kombinator turunan, masukkan elemen apa pun secara implisit `*`
						token.slice( 0, i - 1 )
							.concat( { nilai: token[ i - 2 ].type === " " ? "*" : "" } )
					).ganti( rtrimCSS, "$1" ),
					pencocokan,
					saya < j && matcherFromTokens( token.slice( i, j ) ),
					j < len && matcherFromTokens( ( token = tokens.slice( j ) ) ),
					j < len && toSelector( token )
				);
			}
			matchers.push( matcher );
		}
	}

	kembalikan elemenMatcher( pencocokan );
}

fungsi matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.panjang > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = fungsi( benih, konteks, xml, hasil, terluar ) {
			var elemen, j, pencocokan,
				jumlah yang cocok = 0,
				saya = "0",
				tak tertandingi = unggulan && [],
				set Cocok = [],
				konteksBackup = Konteks terluar,

				// Kita harus selalu memiliki elemen awal atau konteks terluar
				elemen = benih || byElement && Expr.find.TAG( "*", terluar ),

				// Gunakan dirrun bilangan bulat jika ini adalah pencocokan terluar
				dirrunsUnique = ( dirruns += konteksBackup == null ? 1 : Math.random() || 0.1 ),
				len = elemen.panjang;

			if ( terluar ) {

				// Dukungan: IE 11+, Edge 17 - 18+
				// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
				// dua dokumen; perbandingan dangkal berhasil.
				// eslint-disable-baris berikutnya eqeqeq
				outermostContext = konteks == dokumen || konteks || paling luar;
			}

			// Tambahkan elemen yang meneruskan elementMatchers langsung ke hasil
			// Dukungan: iOS <=7 - 9 saja
			// Toleransi properti NodeList (IE: "length"; Safari: <number>) yang cocok
			// elemen berdasarkan id. (lihat trac-14142)
			untuk ( ; saya !== len && ( elem = elemen[ i ] ) != null; i++ ) {
				if ( olehElemen && elemen ) {
					j = 0;

					// Dukungan: IE 11+, Edge 17 - 18+
					// IE/Edge terkadang memunculkan kesalahan "Izin ditolak" saat melakukan perbandingan ketat
					// dua dokumen; perbandingan dangkal berhasil.
					// eslint-disable-baris berikutnya eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDokumen( elemen );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, konteks || dokumen, xml ) ) {
							push.call( hasil, elemen );
							merusak;
						}
					}
					if ( terluar ) {
						dirruns = dirrunsUnik;
					}
				}

				// Lacak elemen yang tidak cocok untuk filter yang disetel
				jika ( olehSet ) {

					// Mereka akan melewati semua kemungkinan pencocokan
					if ( ( elemen = !matcher && elemen ) ) {
						jumlah yang cocok--;
					}

					// Memperpanjang array untuk setiap elemen, cocok atau tidak
					jika ( benih ) {
						tak tertandingi.push( elem );
					}
				}
			}

			// `i` sekarang menjadi jumlah elemen yang dikunjungi di atas, dan menambahkannya ke `matchedCount`
			// membuat yang terakhir menjadi non-negatif.
			jumlah yang cocok += i;

			// Terapkan filter yang disetel ke elemen yang tidak cocok
			// CATATAN: Ini dapat dilewati jika tidak ada elemen yang tidak cocok (yaitu, `matchedCount`
			// sama dengan `i`), kecuali kita tidak mengunjungi elemen _any_ pada loop di atas karena kita sudah mengunjunginya
			// tidak ada pencocokan elemen dan tidak ada benih.
			// Menambah string awal "0" `i` memungkinkan `i` tetap menjadi string hanya di dalamnya
			// case, yang akan menghasilkan "00" `matchedCount` yang berbeda dari `i` tetapi juga
			// secara numerik nol.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( tak tertandingi, setMatched, konteks, xml );
				}

				jika ( benih ) {

					// Integrasikan kembali kecocokan elemen untuk menghilangkan kebutuhan pengurutan
					jika (Jumlah yang cocok > 0 ) {
						ketika saya-- ) {
							if ( !( tidak cocok[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( hasil );
							}
						}
					}

					// Buang nilai placeholder indeks untuk mendapatkan kecocokan sebenarnya saja
					setMatched = menyingkat( setMatched );
				}

				// Tambahkan kecocokan ke hasil
				push.apply( hasil, setMatched );

				// Pencocokan set tanpa biji yang menggantikan beberapa pencocokan yang berhasil menetapkan pengurutan
				if ( terluar && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( hasil );
				}
			}

			// Ganti manipulasi global dengan pencocokan bertingkat
			if ( terluar ) {
				dirruns = dirrunsUnik;
				terluarContext = konteksBackup;
			}

			kembali tak tertandingi;
		};

	kembali dengan Set?
		markFunction( superMatcher ) :
		pencocokan super;
}

kompilasi fungsi (pemilih, cocokkan /* Hanya Penggunaan Internal */ ) {
	var saya,
		setMatchers = [],
		elemenMatcher = [],
		di-cache = compilerCache[pemilih + " " ];

	jika ( !cache ) {

		// Menghasilkan fungsi fungsi rekursif yang dapat digunakan untuk memeriksa setiap elemen
		jika ( !cocok ) {
			cocok = tokenize( pemilih );
		}
		i = cocok.panjang;
		ketika saya-- ) {
			di-cache = matcherFromTokens( cocok[ i ] );
			if ( di-cache[ expando ] ) {
				setMatchers.push( di-cache);
			} kalau tidak {
				elementMatchers.push( di-cache);
			}
		}

		// Cache fungsi yang dikompilasi
		di-cache = compilerCache( pemilih,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Simpan pemilih dan tokenisasi
		cached.selector = pemilih;
	}
	kembali di-cache;
}

/**
 * Fungsi seleksi tingkat rendah yang bekerja dengan kompilasi jQuery
 * fungsi pemilih
 * @param {String|Function} selector Sebuah selector atau yang telah dikompilasi sebelumnya
 * Fungsi pemilih dibangun dengan kompilasi pemilih jQuery
 * @param {Elemen} konteks
 * @param {Array} [hasil]
 * @param {Array} [seed] Satu set elemen yang akan dicocokkan
 */
fungsi pilih( pemilih, konteks, hasil, benih ) {
	var i, token, token, ketik, temukan,
		dikompilasi = jenis pemilih === "fungsi" && pemilih,
		match = !seed && tokenize( ( selector = dikompilasi.selector || selector ) );

	hasil = hasil || [];

	// Cobalah untuk meminimalkan operasi jika hanya ada satu pemilih dalam daftar dan tidak ada seed
	// (yang terakhir menjamin konteksnya)
	if ( cocok.panjang === 1 ) {

		// Kurangi konteks jika pemilih gabungan terdepan adalah ID
		token = cocok[ 0 ] = cocok[ 0 ].slice( 0 );
		if ( token.panjang > 2 && ( token = token[ 0 ] ).type === "ID" &&
				konteks.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			konteks = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				konteks
			) || [] )[ 0 ];
			jika ( !konteks ) {
				mengembalikan hasil;

			// Pencocokan yang sudah dikompilasi akan tetap memverifikasi leluhur, jadi naikkan levelnya
			} else if ( dikompilasi ) {
				konteks = konteks.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Ambil satu set benih untuk pencocokan kanan-ke-kiri
		i = matchExpr.needsContext.test( pemilih ) ? 0 : token.panjang;
		ketika saya-- ) {
			token = token[ saya ];

			// Batalkan jika kita menekan kombinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				merusak;
			}
			if ( ( temukan = Expr.find[ ketik ] ) ) {

				// Telusuri, memperluas konteks untuk kombinator saudara terkemuka
				if ( ( benih = temukan(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( token[ 0 ].type ) &&
						testContext( konteks.parentNode ) || konteks
				) ) ) {

					// Jika benih kosong atau tidak ada token yang tersisa, kami dapat kembali lebih awal
					token.sambungan( i, 1 );
					selector = seed.length && toSelector( token );
					jika ( !pemilih ) {
						push.apply( hasil, benih );
						mengembalikan hasil;
					}

					merusak;
				}
			}
		}
	}

	// Kompilasi dan jalankan fungsi pemfilteran jika tidak tersedia
	// Berikan `match` untuk menghindari retokenisasi jika kita memodifikasi pemilih di atas
	( dikompilasi || kompilasi( pemilih, cocokkan ) )(
		benih,
		konteks,
		!dokumenIsHTML,
		hasil,
		!konteks || rsibling.test( pemilih ) && testContext( konteks.parentNode ) || konteks
	);
	mengembalikan hasil;
}

// Tugas satu kali

// Dukungan: Android <=4.0 - 4.1+
// Urutkan stabilitas
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Inisialisasi terhadap dokumen default
setDokumen();

// Dukungan: Android <=4.0 - 4.1+
// Node yang terpisah secara membingungkan mengikuti *satu sama lain*
support.sortDetached = menegaskan( fungsi( el ) {

	// Harus mengembalikan 1, tetapi mengembalikan 4 (berikut)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.temukan = temukan;

// Tidak digunakan lagi
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Ini selalu bersifat pribadi, tapi dulunya didokumentasikan
// sebagai bagian dari Sizzle jadi mari kita pertahankan di baris 3.x
// untuk tujuan kompatibilitas ke belakang.
find.compile = kompilasi;
temukan.pilih = pilih;
temukan.setDocument = setDocument;

temukan.escape = jQuery.escapeSelector;
temukan.getText = jQuery.teks;
temukan.isXML = jQuery.isXMLDoc;
temukan.selectors = jQuery.expr;
temukan.dukungan = jQuery.dukungan;
temukan.uniqueSort = jQuery.uniqueSort;

	/* eslint-aktifkan */

} )();


var dir = fungsi( elem, dir, sampai ) {
	var cocok = [],
		potong = sampai !== tidak terdefinisi;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( potong && jQuery( elem ).is( sampai ) ) {
				merusak;
			}
			cocok.push( elem );
		}
	}
	kembali cocok;
};


var saudara = fungsi( n, elem ) {
	var cocok = [];

	untuk ( ; n; n = n.saudara berikutnya ) {
		jika ( n.nodeType === 1 && n !== elem ) {
			cocok.push( n );
		}
	}

	kembali cocok;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Menerapkan fungsionalitas yang sama untuk filter dan bukan
function winnow( elemen, kualifikasi, bukan ) {
	if ( isFunction( kualifikasi ) ) {
		kembalikan jQuery.grep( elemen, fungsi( elemen, i ) {
			return !!qualifier.call( elem, i, elem ) !== tidak;
		} );
	}

	// Elemen tunggal
	if ( kualifikasi.nodeType ) {
		kembalikan jQuery.grep( elemen, fungsi( elemen ) {
			return ( elem === kualifikasi ) !== tidak;
		} );
	}

	// Elemen seperti array (jQuery, argumen, Array)
	if ( kualifikasi typeof !== "string" ) {
		kembalikan jQuery.grep( elemen, fungsi( elemen ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== tidak;
		} );
	}

	// Difilter secara langsung untuk penyeleksi sederhana dan kompleks
	return jQuery.filter( kualifikasi, elemen, bukan );
}

jQuery.filter = fungsi( expr, elemen, bukan ) {
	var elemen = elemen[ 0 ];

	jika tidak ) {
		expr = ":tidak(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		kembalikan jQuery.find.matchesSelector( elem, expr ) ? [ elemen ] : [];
	}

	kembalikan jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		kembalikan elem.nodeType === 1;
	} ) );
};

jQuery.fn.perpanjang( {
	temukan: fungsi( pemilih ) {
		var i, ulang,
			len = ini.panjang,
			diri = ini;

		if (pemilih jenis !== "string" ) {
			kembalikan ini.pushStack( jQuery( selector ).filter( function() {
				untuk ( saya = 0; saya < len; saya++ ) {
					if ( jQuery.berisi( self[ i ], this ) ) {
						kembali benar;
					}
				}
			} ) );
		}

		ret = ini.pushStack( [] );

		untuk ( saya = 0; saya < len; saya++ ) {
			jQuery.find( pemilih, mandiri[ i ], ret );
		}

		kembali len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: fungsi (pemilih) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	bukan: fungsi( pemilih ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	adalah: fungsi( pemilih ) {
		kembali !!menampi(
			ini,

			// Jika ini adalah pemilih posisi/relatif, periksa keanggotaan dalam kumpulan yang dikembalikan
			// jadi $("p:first").is("p:last") tidak akan mengembalikan nilai true untuk dokumen dengan dua "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery(pemilih):
				pemilih || [],
			PALSU
		).panjang;
	}
} );


// Inisialisasi objek jQuery


// Referensi pusat ke root jQuery(dokumen)
var rootjQuery,

	// Cara sederhana untuk memeriksa string HTML
	// Prioritaskan #id daripada <tag> untuk menghindari XSS melalui location.hash (trac-9521)
	// Pengenalan HTML yang ketat (trac-11290: harus dimulai dengan <)
	// Pintasan kasus #id sederhana untuk kecepatan
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( pemilih, konteks, root ) {
		var cocok, elemen;

		// MENANGANI: $(""), $(null), $(tidak terdefinisi), $(false)
		jika ( !pemilih ) {
			kembalikan ini;
		}

		// Metode init() menerima rootjQuery alternatif
		// agar migrasi dapat mendukung jQuery.sub (gh-2101)
		akar = akar || rootjQuery;

		// Menangani string HTML
		if (pemilih jenis === "string" ) {
			if ( pemilih[ 0 ] === "<" &&
				pemilih[ selector.length - 1 ] === ">" &&
				selector.panjang >= 3 ) {

				// Asumsikan string yang diawali dan diakhiri dengan <> adalah HTML dan lewati pemeriksaan regex
				cocok = [ null, pemilih, null ];

			} kalau tidak {
				cocokkan = rquickExpr.exec( pemilih );
			}

			// Cocokkan html atau pastikan tidak ada konteks yang ditentukan untuk #id
			if ( cocok && ( cocok[ 1 ] || !konteks ) ) {

				// MENANGANI: $(html) -> $(array)
				jika ( cocok dengan[ 1 ] ) {
					konteks = contoh konteks jQuery? konteks[ 0 ] : konteks;

					// Opsi untuk menjalankan skrip berlaku untuk back-compat
					// Sengaja membiarkan kesalahan muncul jika parseHTML tidak ada
					jQuery.merge( ini, jQuery.parseHTML(
						pertandingan[ 1 ],
						konteks && konteks.nodeType ? konteks.pemilikDokumen || konteks : dokumen,
						BENAR
					) );

					// MENANGANI: $(html, alat peraga)
					if ( rsingleTag.test( cocok[ 1 ] ) && jQuery.isPlainObject( konteks ) ) {
						untuk ( cocok dengan konteks ) {

							// Properti konteks disebut sebagai metode jika memungkinkan
							if ( isFunction( ini[ cocok ] ) ) {
								ini[ cocok ]( konteks[ cocok ] );

							// ...dan sebaliknya ditetapkan sebagai atribut
							} kalau tidak {
								this.attr( cocok, konteks[ cocok ] );
							}
						}
					}

					kembalikan ini;

				// PENANGANAN: $(#id)
				} kalau tidak {
					elem = document.getElementById( cocokkan[ 2 ] );

					jika ( elemen ) {

						// Menyuntikkan elemen langsung ke objek jQuery
						ini[ 0 ] = elemen;
						ini.panjang = 1;
					}
					kembalikan ini;
				}

			// MENANGANI: $(expr, $(...))
			} lain jika ( !konteks || konteks.jquery ) {
				kembali ( konteks || root ).find( pemilih );

			// MENANGANI: $(expr, konteks)
			// (yang setara dengan: $(context).find(expr)
			} kalau tidak {
				kembalikan this.constructor( konteks ).find( selector );
			}

		// MENANGANI: $(elemen DOME)
		} else if ( selector.nodeType ) {
			this[ 0 ] = pemilih;
			ini.panjang = 1;
			kembalikan ini;

		// MENANGANI: $(fungsi)
		// Pintasan untuk dokumen siap
		} else if ( isFunction( pemilih ) ) {
			kembalikan root.siap !== tidak terdefinisi ?
				root.siap( pemilih ):

				// Jalankan segera jika ready tidak ada
				pemilih( jQuery );
		}

		kembalikan jQuery.makeArray( pemilih, ini );
	};

// Berikan fungsi init prototipe jQuery untuk contoh selanjutnya
init.prototipe = jQuery.fn;

// Inisialisasi referensi pusat
rootjQuery = jQuery( dokumen );


var rparentprev = /^(?:parents|prev(?:Sampai|Semua))/,

	// Metode dijamin menghasilkan himpunan unik ketika dimulai dari himpunan unik
	dijaminUnik = {
		anak-anak: benar,
		isinya: benar,
		selanjutnya: benar,
		sebelumnya: benar
	};

jQuery.fn.perpanjang( {
	memiliki: fungsi( target ) {
		var target = jQuery( target, ini ),
			l = target.panjang;

		kembalikan ini.filter( fungsi() {
			var saya = 0;
			untuk ( ; saya < l; saya++ ) {
				if ( jQuery.berisi( ini, target[ i ] ) ) {
					kembali benar;
				}
			}
		} );
	},

	terdekat: fungsi( penyeleksi, konteks ) {
		var sekarang,
			saya = 0,
			l = ini.panjang,
			cocok = [],
			target = typeof selector !== "string" && jQuery( selector );

		// Pemilih posisi tidak pernah cocok, karena tidak ada konteks _selection_
		if ( !rneedsContext.test( penyeleksi ) ) {
			untuk ( ; saya < l; saya++ ) {
				untuk ( cur = ini[ i ]; cur && cur !== konteks; cur = cur.parentNode ) {

					// Selalu lewati bagian dokumen
					if ( cur.nodeType < 11 && ( target ?
						target.index( saat ini ) > -1 :

						// Jangan meneruskan non-elemen ke jQuery#find
						sekarang.nodeType === 1 &&
							jQuery.find.matchesSelector( saat ini, penyeleksi ) ) ) {

						cocok.push( skr );
						merusak;
					}
				}
			}
		}

		kembalikan this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Menentukan posisi suatu elemen dalam himpunan
	indeks: fungsi( elemen ) {

		// Tidak ada argumen, kembalikan indeks dalam induk
		jika ( !elemen ) {
			kembali ( ini[ 0 ] && ini[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Indeks di pemilih
		if ( typeof elemen === "string" ) {
			kembalikan indexOf.call( jQuery( elem ), ini[ 0 ] );
		}

		// Temukan posisi elemen yang diinginkan
		kembalikan indexOf.call( ini,

			// Jika menerima objek jQuery, elemen pertama yang digunakan
			elem.jquery ? elemen[ 0 ] : elemen
		);
	},

	tambahkan: fungsi (pemilih, konteks) {
		kembalikan ini.pushStack(
			jQuery.unikSort(
				jQuery.merge( this.get(), jQuery( pemilih, konteks ) )
			)
		);
	},

	addBack: fungsi( pemilih ) {
		kembalikan ini.tambahkan( pemilih == null ?
			this.prevObject : this.prevObject.filter( pemilih )
		);
	}
} );

fungsi saudara( sekarang, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	kembali saat ini;
}

jQuery.setiap( {
	induk: fungsi( elemen ) {
		var induk = elem.parentNode;
		kembalikan induk && induk.nodeType !== 11 ? induk : nol;
	},
	orang tua: fungsi( elem ) {
		return dir( elem, "parentNode" );
	},
	orang tuaSampai: fungsi( elem, _i, sampai ) {
		return dir( elem, "parentNode", hingga );
	},
	selanjutnya: fungsi( elemen ) {
		kembali saudara( elem, "saudara berikutnya" );
	},
	sebelumnya: fungsi( elemen ) {
		kembalikan saudara( elem, "saudara sebelumnya" );
	},
	nextAll: fungsi( elemen ) {
		return dir( elem, "saudara berikutnya" );
	},
	sebelumnyaSemua: fungsi( elemen ) {
		return dir( elem, "saudara sebelumnya" );
	},
	nextUntil: fungsi( elem, _i, sampai ) {
		return dir( elem, "saudara berikutnya", sampai );
	},
	prevUntil: fungsi( elem, _i, sampai ) {
		return dir( elem, "saudara sebelumnya", sampai );
	},
	saudara kandung: fungsi( elemen ) {
		kembalikan saudara( ( elem.parentNode || {} ).firstChild, elem );
	},
	anak-anak: fungsi( elemen ) {
		kembalikan saudara kandung ( elem.firstChild );
	},
	isi: fungsi( elemen ) {
		jika ( elem.contentDocument != null &&

			// Dukungan: YAITU 11+
			// Elemen <object> tanpa atribut `data` memiliki objek
			// `contentDocument` dengan prototipe `null`.
			getProto( elem.contentDocument ) ) {

			kembalikan elem.contentDocument;
		}

		// Dukungan: IE 9 - 11 saja, iOS 7 saja, Browser Android <=4.3 saja
		// Perlakukan elemen templat seperti elemen biasa di browser itu
		// tidak mendukungnya.
		if ( nodeName( elem, "template" ) ) {
			elemen = elemen.konten || elemen;
		}

		kembalikan jQuery.merge( [], elem.childNodes );
	}
}, fungsi( nama, fn ) {
	jQuery.fn[ nama ] = fungsi( sampai, pemilih ) {
		var cocok = jQuery.map( ini, fn, sampai );

		if ( nama.slice( -5 ) !== "Sampai" ) {
			pemilih = sampai;
		}

		if ( pemilih && tipe pemilih === "string" ) {
			cocok = jQuery.filter( pemilih, cocok );
		}

		if ( ini.panjang > 1 ) {

			// Hapus duplikat
			if ( !guaranteedUnique[ nama ] ) {
				jQuery.uniqueSort( cocok );
			}

			// Urutan terbalik untuk induk* dan turunan sebelumnya
			if ( rparentprev.test( nama ) ) {
				cocok.terbalik();
			}
		}

		kembalikan this.pushStack( cocok );
	};
} );
var rnothtmlputih = ( /[^\x20\t\r\n\f]+/g );



// Mengonversi opsi berformat String menjadi opsi berformat Objek
fungsi buatOpsi( opsi ) {
	var objek = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		obyek[ bendera ] = benar;
	} );
	mengembalikan objek;
}

/*
 * Buat daftar panggilan balik menggunakan parameter berikut:
 *
 * opsi: daftar opsional opsi yang dipisahkan spasi yang akan mengubah caranya
 * perilaku daftar panggilan balik atau objek opsi yang lebih tradisional
 *
 * Secara default, daftar panggilan balik akan bertindak seperti daftar panggilan balik acara dan bisa juga
 * "dipecat" beberapa kali.
 *
 * Opsi yang memungkinkan:
 *
 * sekali: akan memastikan daftar panggilan balik hanya dapat diaktifkan satu kali (seperti Ditangguhkan)
 *
 * memori: akan melacak nilai-nilai sebelumnya dan akan memanggil panggilan balik apa pun yang ditambahkan
 *setelah daftar langsung dipecat dengan "hafal" terbaru
 * nilai (seperti Ditangguhkan)
 *
 * unik: akan memastikan panggilan balik hanya dapat ditambahkan satu kali (tidak ada duplikat dalam daftar)
 *
 * stopOnFalse: menginterupsi panggilan ketika panggilan balik menghasilkan nilai salah
 *
 */
jQuery.Panggilan Balik = fungsi( opsi ) {

	// Konversi opsi dari format String ke format Objek jika diperlukan
	// (kita cek di cache dulu)
	pilihan = typeof pilihan === "string" ?
		buatOpsi( opsi ):
		jQuery.extend( {}, opsi );

	var // Tandai untuk mengetahui apakah daftar sedang diaktifkan
		penembakan,

		// Nilai api terakhir untuk daftar yang tidak dapat dilupakan
		Penyimpanan,

		// Tandai untuk mengetahui apakah daftar sudah diaktifkan
		dipecat,

		// Tandai untuk mencegah penembakan
		terkunci,

		// Daftar panggilan balik sebenarnya
		daftar = [],

		// Antrean data eksekusi untuk daftar berulang
		antrian = [],

		// Indeks callback yang sedang diaktifkan (diubah dengan menambahkan/menghapus sesuai kebutuhan)
		indeks penembakan = -1,

		// Aktifkan panggilan balik
		api = fungsi() {

			// Menerapkan penembakan tunggal
			terkunci = terkunci || pilihan.sekali;

			// Jalankan callback untuk semua eksekusi yang tertunda,
			// menghormati penggantianfiringIndex dan perubahan runtime
			dipecat = menembak = benar;
			untuk ( ; antrian.panjang; pengaktifanIndex = -1 ) {
				memori = antrian.shift();
				while ( ++firingIndex < daftar.panjang ) {

					// Jalankan callback dan periksa penghentian dini
					jika ( daftar[ pengaktifanIndex ].apply( memori[ 0 ], memori[ 1 ] ) === false &&
						pilihan.stopOnFalse ) {

						// Lompat ke akhir dan lupakan datanya agar .add tidak diaktifkan kembali
						fireIndex = daftar.panjang;
						ingatan = salah;
					}
				}
			}

			// Lupakan datanya jika kita sudah selesai melakukannya
			if ( !options.memory ) {
				ingatan = salah;
			}

			menembak = salah;

			// Bersihkan jika kita sudah selesai menembak selamanya
			jika ( terkunci ) {

				// Simpan daftar kosong jika kita memiliki data untuk panggilan tambahan di masa mendatang
				jika (ingatan) {
					daftar = [];

				// Jika tidak, objek ini akan habis
				} kalau tidak {
					daftar = "";
				}
			}
		},

		// Objek Panggilan Balik Sebenarnya
		diri = {

			// Tambahkan panggilan balik atau kumpulan panggilan balik ke daftar
			tambahkan: fungsi() {
				jika ( daftar ) {

					// Jika kita mempunyai memori dari proses sebelumnya, kita harus mengaktifkannya setelah menambahkan
					if ( memori && !menembak ) {
						fireIndex = daftar.panjang - 1;
						antrian.push( memori );
					}

					( fungsi tambah( argumen ) {
						jQuery.masing-masing( args, function( _, arg ) {
							jika ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									daftar.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Periksa secara rekursif
								tambahkan(argumen);
							}
						} );
					} )( argumen );

					if ( memori && !menembak ) {
						api();
					}
				}
				kembalikan ini;
			},

			// Hapus panggilan balik dari daftar
			hapus: fungsi() {
				jQuery.each( argumen, fungsi( _, arg ) {
					indeks var;
					while ( ( indeks = jQuery.inArray( arg, daftar, indeks ) ) > -1 ) {
						daftar.sambungan( indeks, 1 );

						// Menangani indeks pengaktifan
						jika ( indeks <= pengaktifanIndex ) {
							indeks penembakan--;
						}
					}
				} );
				kembalikan ini;
			},

			// Periksa apakah panggilan balik tertentu ada dalam daftar.
			// Jika tidak ada argumen yang diberikan, kembalikan apakah daftar memiliki callback yang terpasang atau tidak.
			memiliki: fungsi( fn ) {
				kembali fn?
					jQuery.inArray( fn, daftar ) > -1 :
					daftar.panjang > 0;
			},

			// Hapus semua panggilan balik dari daftar
			kosong: fungsi() {
				jika ( daftar ) {
					daftar = [];
				}
				kembalikan ini;
			},

			// Nonaktifkan .fire dan .add
			// Batalkan eksekusi apa pun yang sedang/tertunda
			// Hapus semua callback dan nilai
			nonaktifkan: fungsi() {
				terkunci = antrian = [];
				daftar = memori = "";
				kembalikan ini;
			},
			dinonaktifkan: fungsi() {
				kembali !daftar;
			},

			// Nonaktifkan .fire
			// Nonaktifkan juga .add kecuali kita mempunyai memori (karena tidak akan berpengaruh)
			// Batalkan eksekusi yang tertunda
			kunci: fungsi() {
				terkunci = antrian = [];
				if ( !memori && !menembak ) {
					daftar = memori = "";
				}
				kembalikan ini;
			},
			terkunci: fungsi() {
				kembali !!terkunci;
			},

			// Panggil semua callback dengan konteks dan argumen tertentu
			fireWith: fungsi( konteks, argumen ) {
				jika ( !terkunci ) {
					args = args || [];
					args = [ konteks, args.slice ? args.slice() : args ];
					antrian.push( args );
					jika ( !menembak ) {
						api();
					}
				}
				kembalikan ini;
			},

			// Panggil semua callback dengan argumen yang diberikan
			api: fungsi() {
				self.fireWith( ini, argumen );
				kembalikan ini;
			},

			// Untuk mengetahui apakah callback telah dipanggil setidaknya sekali
			dipecat: fungsi() {
				kembali !!dipecat;
			}
		};

	kembalikan diri;
};


fungsi Identitas( v ) {
	kembali v;
}
fungsi Pelempar (misal) {
	membuang mantan;
}

fungsi mengadopsiValue( nilai, tekad, penolakan, noValue ) {
	metode var;

	mencoba {

		// Periksa aspek janji terlebih dahulu untuk mengistimewakan perilaku sinkron
		if ( nilai && isFunction( ( metode = nilai.janji ) ) ) {
			metode.panggilan( nilai ).selesai( tekad ).gagal( tolak );

		// Barang-barang lainnya
		} else if ( nilai && isFunction( ( metode = nilai.maka ) ) ) {
			metode.panggilan( nilai, tekad, tolak );

		// Hal-hal lain yang tidak dapat dilakukan
		} kalau tidak {

			// Kontrol argumen `resolve` dengan membiarkan Array#slice memasukkan boolean `noValue` ke integer:
			// * salah: [ nilai ].slice( 0 ) => tekad( nilai )
			// * benar: [ nilai ].slice( 1 ) => tekad()
			tekad.menerapkan( tidak terdefinisi, [ nilai ].slice( noValue ) );
		}

	// Untuk Janji/A+, ubah pengecualian menjadi penolakan
	// Karena jQuery.when tidak membuka bungkusan yang ada, kita bisa melewati pemeriksaan tambahan yang muncul di
	// Deferred#then untuk menekan penolakan secara kondisional.
	} tangkapan ( nilai ) {

		// Dukungan: Android 4.0 saja
		// Fungsi mode ketat yang dipanggil tanpa .call/.apply mendapatkan konteks objek global
		tolak.terapkan( tidak ditentukan, [ nilai ] );
	}
}

jQuery.perpanjang( {

	Ditangguhkan: function( func ) {
		var tupel = [

				// tindakan, tambahkan pendengar, panggilan balik,
				// ... .lalu penangan, indeks argumen, [keadaan akhir]
				[ "beritahu", "kemajuan", jQuery.Callbacks( "memori" ),
					jQuery.Panggilan Balik( "memori" ), 2 ],
				[ "menyelesaikan", "selesai", jQuery.Callbacks( "sekali memori" ),
					jQuery.Callbacks( "sekali memori" ), 0, "terselesaikan" ],
				[ "tolak", "gagal", jQuery.Callbacks( "sekali memori" ),
					jQuery.Callbacks( "sekali memori" ), 1, "ditolak" ]
			],
			status = "menunggu keputusan",
			janji = {
				fungsi negara() {
					negara bagian kembali;
				},
				selalu: fungsi() {
					ditangguhkan.selesai( argumen ).gagal( argumen );
					kembalikan ini;
				},
				"menangkap": fungsi( fn ) {
					kembalikan janji.lalu( null, fn );
				},

				// Simpan pipa untuk kompatibilitas kembali
				pipa: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = argumen;

					kembalikan jQuery.Deferred( function( newDefer ) {
						jQuery.each( tupel, fungsi( _i, tupel ) {

							// Memetakan tupel (kemajuan, selesai, gagal) ke argumen (selesai, gagal, maju)
							var fn = isFunction( fns[ tupel[ 4 ] ] ) && fns[ tupel[ 4 ] ];

							// deferred.progress(function() { ikat ke newDefer atau newDefer.notify })
							// deferred.done(function() { ikat ke newDefer atau newDefer.resolve })
							// deferred.fail(function() { ikat ke newDefer atau newDefer.reject })
							ditangguhkan[ tupel[ 1 ] ]( fungsi() {
								var dikembalikan = fn && fn.apply( ini, argumen );
								if ( dikembalikan && isFunction( dikembalikan.janji ) ) {
									kembali.janji()
										.progress( newDefer.notify )
										.selesai( newDefer.resolve )
										.fail( newDefer.tolak );
								} kalau tidak {
									newDefer[ tupel[ 0 ] + "Dengan" ](
										ini,
										fn? [ dikembalikan ] : argumen
									);
								}
							} );
						} );
						fns = nol;
					} ).janji();
				},
				lalu: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					fungsi tekad( kedalaman, tangguhan, penangan, khusus ) {
						fungsi kembali() {
							var itu = ini,
								args = argumen,
								mungkinLempar = fungsi() {
									var kembali, lalu;

									// Dukungan: Janji/A+ bagian 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Abaikan upaya resolusi ganda
									jika ( kedalaman < maxDepth ) {
										kembali;
									}

									dikembalikan = handler.apply( itu, args );

									// Dukungan: Janji/A+ bagian 2.3.1
									// https://promisesaplus.com/#point-48
									if ( dikembalikan === ditangguhkan.janji() ) {
										throw new TypeError( "Resolusi mandiri yang dapat dilakukan" );
									}

									// Dukungan: Janji/A+ bagian 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Ambil `lalu` hanya sekali
									lalu = dikembalikan &&

										// Dukungan: Janji/A+ bagian 2.3.4
										// https://promisesaplus.com/#point-64
										// Hanya memeriksa objek dan fungsi untuk mengetahui kemampuannya
										( typeof dikembalikan === "objek" ||
											typeof dikembalikan === "fungsi") &&
										kembali.lalu;

									// Menangani pengembalian yang dapat dilakukan
									jika ( isFunction( maka ) ) {

										// Prosesor khusus (beri tahu) tunggu saja resolusinya
										jika (khusus) {
											lalu.panggil(
												kembali,
												tekad (maxDepth, ditangguhkan, Identitas, khusus),
												tekad( maxDepth, ditangguhkan, Pelempar, khusus )
											);

										// Prosesor normal (resolve) juga terhubung ke proses
										} kalau tidak {

											// ...dan abaikan nilai resolusi lama
											maxDepth++;

											lalu.panggil(
												kembali,
												tekad (maxDepth, ditangguhkan, Identitas, khusus),
												tekad( maxDepth, ditangguhkan, Pelempar, khusus ),
												tekad( maxDepth, ditangguhkan, Identitas,
													ditangguhkan.notifyWith )
											);
										}

									// Tangani semua nilai kembalian lainnya
									} kalau tidak {

										// Hanya pengendali pengganti yang meneruskan konteks
										// dan beberapa nilai (perilaku non-spesifikasi)
										if ( penangan !== Identitas ) {
											itu = tidak terdefinisi;
											args = [ dikembalikan ];
										}

										// Memproses nilai
										// Proses default adalah penyelesaian
										( khusus || deferred.resolveWith )( itu, args );
									}
								},

								// Hanya prosesor normal (resolve) yang menangkap dan menolak pengecualian
								proses = istimewa ?
									mungkinMelempar :
									fungsi() {
										mencoba {
											mungkinMelempar();
										} menangkap ( e ) {

											jika ( jQuery.Deferred.ExceptionHook ) {
												jQuery.Deferred.ExceptionHook( e,
													proses.kesalahan );
											}

											// Dukungan: Janji/A+ bagian 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Abaikan pengecualian pasca-resolusi
											jika ( kedalaman + 1 >= maxDepth ) {

												// Hanya pengendali pengganti yang meneruskan konteks
												// dan beberapa nilai (perilaku non-spesifikasi)
												if ( pengendali !== Pelempar ) {
													itu = tidak terdefinisi;
													argumen = [ e ];
												}

												ditangguhkan.tolakDengan( itu, args );
											}
										}
									};

							// Dukungan: Janji/A+ bagian 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Segera selesaikan kembali janji untuk menghindari penolakan palsu
							// kesalahan selanjutnya
							jika ( kedalaman ) {
								proses();
							} kalau tidak {

								// Panggil hook opsional untuk mencatat kesalahan, jika ada pengecualian
								// karena akan hilang ketika eksekusi tidak sinkron
								jika ( jQuery.Deferred.getErrorHook ) {
									proses.kesalahan = jQuery.Deferred.getErrorHook();

								// Alias ​​​​yang tidak digunakan lagi di atas. Sesuai dengan namanya
								// mengembalikan tumpukan, bukan contoh kesalahan, jQuery hanya meneruskannya
								// langsung ke `console.warn` agar keduanya berfungsi; sebuah contoh
								// lebih baik bekerja sama dengan peta sumber.
								} lain jika ( jQuery.Deferred.getStackHook ) {
									proses.kesalahan = jQuery.Deferred.getStackHook();
								}
								jendela.setTimeout( proses );
							}
						};
					}

					kembalikan jQuery.Deferred( function( newDefer ) {

						// kemajuan_handlers.tambahkan( ... )
						tupel[ 0 ][ 3 ].tambahkan(
							menyelesaikan(
								0,
								penangguhan baru,
								isFunction(onProgress)?
									dalam perkembangannya :
									Identitas,
								newDefer.notifyWith
							)
						);

						// terpenuhi_handlers.tambahkan( ... )
						tupel[ 1 ][ 3 ].tambahkan(
							menyelesaikan(
								0,
								penangguhan baru,
								isFunction(onFulfilled) ?
									sedang terpenuhi :
									Identitas
							)
						);

						// ditolak_handlers.tambahkan( ... )
						tupel[ 2 ][ 3 ].tambahkan(
							menyelesaikan(
								0,
								penangguhan baru,
								isFunction(onRejected) ?
									pada Ditolak :
									Pelempar
							)
						);
					} ).janji();
				},

				// Dapatkan janji untuk penangguhan ini
				// Jika obj disediakan, aspek janji ditambahkan ke objek
				janji: fungsi( obj ) {
					kembalikan objek != null ? jQuery.extend( obj, janji ) : janji;
				}
			},
			ditangguhkan = {};

		// Tambahkan metode khusus daftar
		jQuery.each( tupel, fungsi( i, tupel ) {
			var daftar = tupel[ 2 ],
				stateString = tupel[ 5 ];

			// janji.kemajuan = daftar.tambahkan
			// janji.selesai = daftar.tambahkan
			// janji.gagal = daftar.tambahkan
			janji[ tuple[ 1 ] ] = daftar.tambahkan;

			// Tangani status
			jika ( stateString ) {
				daftar.tambahkan(
					fungsi() {

						// state = "resolved" (yaitu terpenuhi)
						// status = "ditolak"
						negara = stateString;
					},

					// ditolak_callbacks.nonaktifkan
					// terpenuhi_callbacks.disable
					tupel[ 3 - i ] [ 2 ].nonaktifkan,

					// ditolak_handlers.nonaktifkan
					// terpenuhi_handlers.nonaktifkan
					tupel[ 3 - i ][ 3 ].nonaktifkan,

					// kemajuan_callbacks.lock
					tupel[ 0 ][ 2 ].kunci,

					// kemajuan_handlers.lock
					tupel[ 0 ][ 3 ].lock
				);
			}

			// kemajuan_handlers.api
			// terpenuhi_handlers.api
			// ditolak_handlers.api
			daftar.tambahkan( tupel[ 3 ].api );

			// ditangguhkan.notify = function() { ditangguhkan.notifyWith(...) }
			// ditangguhkan.resolve = function() { ditangguhkan.resolveWith(...) }
			// ditangguhkan.tolak = fungsi() { ditangguhkan.tolakDengan(...) }
			ditangguhkan[ tupel[ 0 ] ] = fungsi() {
				ditangguhkan[ tupel[ 0 ] + "Dengan" ]( ini === ditangguhkan ? tidak terdefinisi : ini, argumen );
				kembalikan ini;
			};

			// ditangguhkan.notifyWith = daftar.fireWith
			// ditangguhkan.resolveWith = daftar.fireWith
			// ditangguhkan.tolakDengan = daftar.apiDengan
			ditangguhkan[ tuple[ 0 ] + "Dengan" ] = list.fireWith;
		} );

		// Buatlah janji yang tertunda
		janji.janji( ditangguhkan );

		// Panggil fungsi yang diberikan jika ada
		jika ( fungsi ) {
			func.call( ditangguhkan, ditangguhkan );
		}

		// Semua selesai!
		pengembalian ditangguhkan;
	},

	// Pembantu yang ditangguhkan
	kapan: fungsi( SingleValue ) {
		var

			// hitungan bawahan yang belum selesai
			tersisa = argumen.panjang,

			// jumlah argumen yang belum diproses
			saya = sisa,

			// data pemenuhan bawahan
			resolveContexts = Array(i),
			resolValues ​​= irisan.panggilan( argumen ),

			// yang utama Ditangguhkan
			utama = jQuery.Ditangguhkan(),

			// pabrik panggilan balik bawahan
			updateFunc = fungsi( saya ) {
				fungsi kembali (nilai) {
					resolveContexts[ i ] = ini;
					resolValues[ i ] = argumen.panjang > 1 ? irisan.panggilan( argumen ) : nilai;
					jika ( !( --sisa ) ) {
						primer.resolveWith( resolContexts, resolveValues ​​);
					}
				};
			};

		// Argumen tunggal dan kosong diadopsi seperti Promise.resolve
		jika ( tersisa <= 1 ) {
			adopsiValue( singleValue, primer.selesai( updateFunc( i ) ).resolve, primer.tolak,
				!tersisa );

			// Gunakan .then() untuk membuka paket sekunder (lih. gh-3000)
			if ( primer.state() === "tertunda" ||
				isFunction(resolveValues[ i ] &&resolveValues[ i ].then ) ) {

				kembalikan primer.lalu();
			}
		}

		// Beberapa argumen dikumpulkan seperti Promise.semua elemen array
		ketika saya-- ) {
			adopsiValue(resolveValues[ i ], updateFunc( i ), primer.tolak );
		}

		kembalikan primer.janji();
	}
} );


// Ini biasanya menunjukkan kesalahan programmer selama pengembangan,
// peringatkan tentang hal tersebut secepatnya daripada menelannya secara default.
var rerrorNames = /^(Eval|Internal|Rentang|Referensi|Sintaks|Jenis|URI)Kesalahan$/;

// Jika `jQuery.Deferred.getErrorHook` ditentukan, `asyncError` adalah kesalahan
// ditangkap sebelum penghalang async untuk mendapatkan penyebab kesalahan aslinya
// yang mungkin disembunyikan.
jQuery.Deferred.ExceptionHook = fungsi( kesalahan, asyncError ) {

	// Dukungan: IE 8 - 9 saja
	// Konsol ada ketika alat pengembang terbuka, yang bisa terjadi kapan saja
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Pengecualian yang ditangguhkan: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = fungsi( kesalahan ) {
	jendela.setTimeout( fungsi() {
		kesalahan melempar;
	} );
};




// Penundaan yang digunakan pada DOM sudah siap
var readyList = jQuery.Ditangguhkan();

jQuery.fn.siap = fungsi( fn ) {

	Daftar siap
		.lalu( fn )

		// Bungkus jQuery.readyException dalam sebuah fungsi sehingga pencariannya
		// terjadi pada saat penanganan kesalahan, bukan saat panggilan balik
		// Registrasi.
		.menangkap( fungsi( kesalahan ) {
			jQuery.readyException( kesalahan );
		} );

	kembalikan ini;
};

jQuery.perpanjang( {

	// Apakah DOM siap digunakan? Setel ke true setelah itu terjadi.
	sudah Siap: salah,

	// Penghitung untuk melacak berapa banyak item yang harus ditunggu sebelumnya
	// event ready diaktifkan. Lihat trac-6781
	siapTunggu: 1,

	// Tangani ketika DOM sudah siap
	siap: fungsi( tunggu ) {

		// Batalkan jika ada penangguhan yang tertunda atau kita sudah siap
		if ( tunggu === benar ? --jQuery.readyWait : jQuery.isReady ) {
			kembali;
		}

		// Ingatlah bahwa DOM sudah siap
		jQuery.isReady = benar;

		// Jika event DOM Ready normal diaktifkan, kurangi, dan tunggu jika perlu
		if ( tunggu !== benar && --jQuery.readyWait > 0 ) {
			kembali;
		}

		// Jika ada fungsi yang terikat, untuk dieksekusi
		readyList.resolveWith( dokumen, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.lalu;

// Pengendali event yang siap pakai dan metode pembersihan mandiri
fungsi selesai() {
	document.removeEventListener( "DOMContentLoaded", selesai );
	window.removeEventListener( "memuat", selesai );
	jQuery.siap();
}

// Tangkap kasus di mana $(document).ready() dipanggil
// setelah event browser terjadi.
// Dukungan: YAITU <=9 - 10 saja
// IE lama terkadang memberi sinyal "interaktif" terlalu cepat
if ( document.readyState === "lengkap" ||
	( document.readyState !== "memuat" && !document.documentElement.doScroll ) ) {

	// Tangani secara asinkron untuk memberi kesempatan pada skrip untuk menunda kesiapan
	window.setTimeout( jQuery.siap );

} kalau tidak {

	// Gunakan panggilan balik acara yang berguna
	document.addEventListener( "DOMContentLoaded", selesai );

	// Penggantian ke window.onload, itu akan selalu berhasil
	window.addEventListener( "memuat", selesai );
}




// Metode multifungsi untuk mendapatkan dan menetapkan nilai koleksi
// Nilai/s secara opsional dapat dieksekusi jika itu adalah sebuah fungsi
var akses = fungsi( elemen, fn, kunci, nilai, dapat dirantai, blankGet, mentah ) {
	var saya = 0,
		len = elemen.panjang,
		massal = kunci == null;

	// Menetapkan banyak nilai
	if ( toType( kunci ) === "objek" ) {
		dapat dirantai = benar;
		untuk ( saya di kunci ) {
			akses( elemen, fn, i, kunci[ i ], benar, blankGet, mentah );
		}

	// Menetapkan satu nilai
	} lain jika ( nilai !== tidak terdefinisi ) {
		dapat dirantai = benar;

		jika ( !isFunction( nilai ) ) {
			mentah = benar;
		}

		jika ( massal ) {

			// Operasi massal dijalankan pada keseluruhan set
			jika ( mentah ) {
				fn.call( elemen, nilai );
				fn = nol;

			// ...kecuali saat mengeksekusi nilai fungsi
			} kalau tidak {
				massal = fn;
				fn = fungsi( elemen, _kunci, nilai ) {
					kembalikan massal.panggilan( jQuery( elem ), nilai );
				};
			}
		}

		jika ( fn ) {
			untuk ( ; saya < len; saya++ ) {
				fn(
					elemen [i], kunci, mentah?
						nilai :
						nilai.panggilan( elemen[ i ], i, fn( elemen[ i ], kunci ) )
				);
			}
		}
	}

	if (dapat dirantai) {
		kembalikan elemen;
	}

	// Mendapat
	jika ( massal ) {
		return fn.call( elemen );
	}

	kembali len? fn( elemen[ 0 ], kunci ) : blankGet;
};


// Mencocokkan string putus-putus untuk membuat camelisasi
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Digunakan oleh camelCase sebagai callback untuk replace()
fungsi fcamelCase( _all, surat ) {
	return letter.toUpperCase();
}

// Konversikan tanda hubung ke camelCase; digunakan oleh modul css dan data
// Dukungan: YAITU <=9 - 11, Tepi 12 - 15
// Microsoft lupa menambahkan awalan vendor mereka (trac-9572)
fungsi kasus unta( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var menerimaData = fungsi( pemilik ) {

	// Hanya menerima:
	// - Simpul
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objek
	// - Setiap
	kembalikan pemilik.nodeType === 1 || pemilik.nodeType === 9 || !( +pemilik.nodeType );
};




fungsi Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototipe = {

	cache: fungsi (pemilik) {

		// Periksa apakah objek pemilik sudah memiliki cache
		var value = pemilik[ this.expando ];

		// Jika tidak, buatlah
		jika ( !nilai ) {
			nilai = {};

			// Kami dapat menerima data untuk node non-elemen di browser modern,
			// tapi sebaiknya kita tidak melakukannya, lihat trac-8335.
			// Selalu mengembalikan objek kosong.
			jika ( menerimaData( pemilik ) ) {

				// Jika node tersebut tidak mungkin dirangkai atau di-loop
				// gunakan tugas biasa
				if ( pemilik.nodeType ) {
					pemilik[ this.expando ] = nilai;

				// Jika tidak, amankan di properti yang tidak dapat dihitung
				// dapat dikonfigurasi harus benar agar properti tersebut dapat berfungsi
				// dihapus ketika data dihapus
				} kalau tidak {
					Objek.defineProperty( pemilik, ini.expando, {
						nilai: nilai,
						dapat dikonfigurasi: benar
					} );
				}
			}
		}

		nilai kembalian;
	},
	set: fungsi (pemilik, data, nilai) {
		var prop,
			cache = ini.cache( pemilik );

		// Tangani: [pemilik, kunci, nilai] args
		// Selalu gunakan kunci camelCase (gh-2257)
		if ( jenis data === "string" ) {
			cache[ camelCase( data ) ] = nilai;

		// Tangani: [ pemilik, { properti } ] args
		} kalau tidak {

			// Salin properti satu per satu ke objek cache
			untuk ( penyangga dalam data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		kembalikan cache;
	},
	dapatkan: fungsi( pemilik, kunci ) {
		kunci kembali === tidak terdefinisi?
			this.cache( pemilik ):

			// Selalu gunakan kunci camelCase (gh-2257)
			pemilik[ this.expando ] && pemilik[ this.expando ][ camelCase( key ) ];
	},
	akses: fungsi (pemilik, kunci, nilai) {

		// Jika:
		//
		// 1. Tidak ada kunci yang ditentukan
		// 2. Kunci string telah ditentukan, tetapi tidak ada nilai yang diberikan
		//
		// Ambil jalur "baca" dan izinkan metode get untuk menentukannya
		// nilai mana yang akan dikembalikan:
		//
		// 1. Seluruh objek cache
		// 2. Data yang disimpan pada kunci
		//
		jika ( kunci === tidak terdefinisi ||
				( ( kunci && typeof key === "string" ) && nilai === tidak terdefinisi ) ) {

			kembalikan this.get( pemilik, kunci );
		}

		// Jika kuncinya bukan string, atau keduanya merupakan kunci dan nilai
		// ditentukan, disetel, atau diperluas (objek yang ada) dengan:
		//
		// 1. Objek properti
		// 2. Kunci dan nilai
		//
		this.set( pemilik, kunci, nilai );

		// Karena jalur "set" dapat memiliki dua kemungkinan titik masuk
		// mengembalikan data yang diharapkan berdasarkan jalur mana yang diambil[*]
		nilai kembalian !== tidak terdefinisi? nilai : kunci;
	},
	hapus: fungsi( pemilik, kunci ) {
		var saya,
			cache = pemilik[ this.expando ];

		jika ( cache === tidak terdefinisi ) {
			kembali;
		}

		if ( kunci !== tidak terdefinisi ) {

			// Mendukung array atau string kunci yang dipisahkan spasi
			if ( Array.isArray( kunci ) ) {

				// Jika kunci adalah serangkaian kunci...
				// Kami selalu menyetel kunci camelCase, jadi hapus itu.
				kunci = kunci.peta( camelCase );
			} kalau tidak {
				kunci = camelCase( kunci );

				// Jika ada kunci dengan spasi, gunakanlah.
				// Jika tidak, buat array dengan mencocokkan non-spasi
				kunci = kunci dalam cache?
					[ kunci ] :
					( key.match( rnothtmlputih ) || [] );
			}

			i = kunci.panjang;

			ketika saya-- ) {
				hapus cache[ kunci[ i ] ];
			}
		}

		// Hapus expando jika tidak ada data lagi
		if ( kunci === tidak terdefinisi || jQuery.isEmptyObject( cache ) ) {

			// Dukungan: Chrome <=35 - 45
			// Performa Webkit & Blink menurun saat menghapus properti
			// dari node DOM, jadi setel ke tidak terdefinisi
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (dibatasi bug)
			if ( pemilik.nodeType ) {
				pemilik[ this.expando ] = tidak terdefinisi;
			} kalau tidak {
				hapus pemilik[ this.expando ];
			}
		}
	},
	hasData: fungsi( pemilik ) {
		var cache = pemilik[ this.expando ];
		kembalikan cache !== tidak terdefinisi && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = Data baru();

var dataUser = Data baru();



// Ringkasan Implementasi
//
// 1. Menerapkan permukaan API dan kompatibilitas semantik dengan cabang 1.9.x
// 2. Tingkatkan kemampuan pemeliharaan modul dengan mengurangi penyimpanan
// jalur ke satu mekanisme.
// 3. Gunakan mekanisme tunggal yang sama untuk mendukung data "pribadi" dan "pengguna".
// 4. _Jangan pernah_ mengekspos data "pribadi" ke kode pengguna (TODO: Jatuhkan _data, _removeData)
// 5. Hindari memaparkan detail implementasi pada objek pengguna (mis. properti expando)
// 6. Memberikan jalur yang jelas untuk implementasi upgrade ke WeakMap pada tahun 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

fungsi getData( data ) {
	jika ( data === "benar" ) {
		kembali benar;
	}

	jika ( data === "salah" ) {
		kembali salah;
	}

	jika ( data === "nol" ) {
		kembalikan nol;
	}

	// Hanya konversikan ke angka jika tidak mengubah string
	jika ( data === +data + "" ) {
		kembali +data;
	}

	if ( rbrace.test( data ) ) {
		kembalikan JSON.parse( data );
	}

	mengembalikan data;
}

fungsi dataAttr( elemen, kunci, data ) {
	nama var;

	// Jika tidak ada yang ditemukan secara internal, coba ambil apa pun
	// data dari atribut data-* HTML5
	if ( data === tidak terdefinisi && elem.nodeType === 1 ) {
		nama = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( nama );

		if ( jenis data === "string" ) {
			mencoba {
				data = getData(data);
			} tangkap ( e ) {}

			// Pastikan kita mengatur datanya agar tidak diubah nantinya
			dataUser.set( elemen, kunci, data );
		} kalau tidak {
			data = tidak terdefinisi;
		}
	}
	mengembalikan data;
}

jQuery.perpanjang( {
	hasData: fungsi( elemen ) {
		kembalikan dataUser.hasData( elemen ) || dataPriv.hasData( elemen );
	},

	data: fungsi( elemen, nama, data ) {
		kembalikan dataUser.access( elemen, nama, data );
	},

	hapusData: fungsi( elemen, nama ) {
		dataUser.remove( elemen, nama );
	},

	// TODO: Sekarang semua panggilan ke _data dan _removeData telah diganti
	// dengan panggilan langsung ke metode dataPriv, metode ini tidak lagi digunakan.
	_data: fungsi( elemen, nama, data ) {
		kembalikan dataPriv.access( elemen, nama, data );
	},

	_removeData: fungsi( elemen, nama ) {
		dataPriv.remove( elemen, nama );
	}
} );

jQuery.fn.perpanjang( {
	data: fungsi( kunci, nilai ) {
		var i, nama, data,
			elemen = ini[ 0 ],
			attrs = elemen && elem.attributes;

		// Mendapatkan semua nilai
		if ( kunci === tidak terdefinisi ) {
			if ( ini.panjangnya ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.panjang;
					ketika saya-- ) {

						// Dukungan: IE 11 saja
						// Elemen attrs bisa bernilai null (trac-14894)
						jika ( attrs[ saya ] ) {
							nama = attrs[ i ].nama;
							if ( nama.indexOf( "data-" ) === 0 ) {
								nama = camelCase( nama.slice( 5 ) );
								dataAttr( elemen, nama, data[ nama ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", benar );
				}
			}

			mengembalikan data;
		}

		// Menetapkan beberapa nilai
		if ( typeof key === "objek" ) {
			kembalikan ini.setiap( fungsi() {
				dataUser.set( ini, kunci );
			} );
		}

		mengembalikan akses( ini, fungsi( nilai ) {
			data var;

			// Objek jQuery yang memanggil (elemen yang cocok) tidak kosong
			// (dan karena itu ada elemen yang muncul di ini[ 0 ]) dan
			// Parameter `nilai` tidak ditentukan. Objek jQuery kosong
			// akan menghasilkan `undefinisi` untuk elem = this[ 0 ] yang akan menghasilkan
			// memberikan pengecualian jika ada upaya untuk membaca cache data.
			if ( elemen && nilai === tidak terdefinisi ) {

				// Mencoba mengambil data dari cache
				// Kuncinya akan selalu berupa camelCased di Data
				data = dataUser.get( elemen, kunci );
				jika ( data !== tidak terdefinisi ) {
					mengembalikan data;
				}

				// Mencoba "menemukan" data di
				// Data khusus HTML5-* attrs
				data = dataAttr( elemen, kunci );
				jika ( data !== tidak terdefinisi ) {
					mengembalikan data;
				}

				// Kami sudah berusaha keras, tapi datanya tidak ada.
				kembali;
			}

			// Atur datanya...
			ini.setiap( fungsi() {

				// Kami selalu menyimpan kunci camelCased
				dataUser.set( ini, kunci, nilai );
			} );
		}, null, nilai, argumen.panjang > 1, null, true );
	},

	hapusData: fungsi( kunci ) {
		kembalikan ini.setiap( fungsi() {
			dataUser.remove( ini, kunci );
		} );
	}
} );


jQuery.perpanjang( {
	antrian: fungsi( elemen, tipe, data ) {
		antrian var;

		jika ( elemen ) {
			ketik = ( ketik || "fx" ) + "antrian";
			antrian = dataPriv.get( elem, ketik );

			// Percepat dequeue dengan keluar secara cepat jika ini hanya sekedar pencarian
			jika ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					antrian = dataPriv.access( elem, ketik, jQuery.makeArray( data ) );
				} kalau tidak {
					antrian.push( data );
				}
			}
			antrian kembali || [];
		}
	},

	dequeue: fungsi( elemen, ketik ) {
		mengetik = mengetik || "fx";

		var antrian = jQuery.antrian( elemen, ketik ),
			startLength = antrian.panjang,
			fn = antrian.shift(),
			kait = jQuery._queueHooks( elemen, ketik ),
			selanjutnya = fungsi() {
				jQuery.dequeue( elemen, ketik );
			};

		// Jika antrian fx dihilangkan antreannya, selalu hapus penjaga kemajuan
		jika ( fn === "sedang berlangsung" ) {
			fn = antrian.shift();
			mulaiPanjang--;
		}

		jika ( fn ) {

			// Tambahkan penjaga kemajuan untuk mencegah antrian fx
			// secara otomatis dikeluarkan dari antrean
			jika ( ketik === "fx" ) {
				antrian.unshift( "sedang berlangsung" );
			}

			// Hapus fungsi penghentian antrian terakhir
			hapus hooks.stop;
			fn.call( elem, selanjutnya, kait );
		}

		if ( !startLength && kait ) {
			hooks.kosong.api();
		}
	},

	// Bukan publik - buat objek queueHooks, atau kembalikan objek saat ini
	_queueHooks: fungsi( elemen, ketik ) {
		var key = ketik + "queueHooks";
		kembalikan dataPriv.get( elemen, kunci ) || dataPriv.access( elemen, kunci, {
			kosong: jQuery.Callbacks( "sekali memori" ).add( function() {
				dataPriv.remove( elem, [ ketik + "antrian", kunci ] );
			} )
		} );
	}
} );

jQuery.fn.perpanjang( {
	antrian: fungsi( tipe, data ) {
		penyetel var = 2;

		if ( tipe tipe !== "string" ) {
			data = ketik;
			ketik = "fx";
			penyetel--;
		}

		if ( argumen.panjang < penyetel ) {
			kembalikan jQuery.queue( ini[ 0 ], ketik );
		}

		mengembalikan data === tidak terdefinisi?
			ini :
			ini.setiap( fungsi() {
				var antrian = jQuery.antrian( ini, ketik, data );

				// Pastikan ada kait untuk antrean ini
				jQuery._queueHooks( ini, ketik );

				if ( ketik === "fx" && antrian[ 0 ] !== "sedang berlangsung" ) {
					jQuery.dequeue( ini, ketik );
				}
			} );
	},
	dequeue: fungsi( ketik ) {
		kembalikan ini.setiap( fungsi() {
			jQuery.dequeue( ini, ketik );
		} );
	},
	clearQueue: fungsi( tipe ) {
		kembalikan this.queue( ketik || "fx", [] );
	},

	// Dapatkan penyelesaian janji ketika antrian bertipe tertentu
	// dikosongkan (fx adalah tipe defaultnya)
	janji: fungsi( tipe, obj ) {
		var tmp,
			hitungan = 1,
			tunda = jQuery.Ditangguhkan(),
			elemen = ini,
			i = ini.panjang,
			tekad = fungsi() {
				jika ( !( --hitungan ) ) {
					defer.resolveWith( elemen, [ elemen ] );
				}
			};

		if ( tipe tipe !== "string" ) {
			obj = mengetik;
			ketik = tidak terdefinisi;
		}
		mengetik = mengetik || "fx";

		ketika saya-- ) {
			tmp = dataPriv.get( elemen[ i ], ketik + "queueHooks" );
			jika ( tmp && tmp.kosong ) {
				hitung++;
				tmp.kosong.tambahkan( tekad );
			}
		}
		menyelesaikan();
		return defer.janji( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = RegExp baru( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Atas", "Kanan", "Bawah", "Kiri" ];

var documentElement = dokumen.documentElement;



	var isAttached = fungsi( elemen ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		tersusun = { tersusun: benar };

	// Dukungan: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 saja
	// Periksa lampiran melintasi batas shadow DOM jika memungkinkan (gh-3504)
	// Dukungan: hanya iOS 10.0-10.2
	// Versi awal iOS 10 mendukung `attachShadow` tetapi tidak mendukung `getRootNode`,
	// menyebabkan kesalahan. Kita perlu memeriksa `getRootNode`.
	jika ( documentElement.getRootNode ) {
		isAttached = fungsi( elemen ) {
			kembalikan jQuery.berisi( elem.ownerDocument, elem ) ||
				elem.getRootNode( tersusun ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = fungsi( elemen, el ) {

		// isHiddenWithinTree mungkin dipanggil dari fungsi jQuery#filter;
		// dalam hal ini, elemen akan menjadi argumen kedua
		elemen = el || elemen;

		// Gaya sebaris mengalahkan segalanya
		kembalikan elem.style.display === "tidak ada" ||
			elemen.gaya.tampilan === "" &&

			// Jika tidak, periksa gaya yang dihitung
			// Dukungan: Firefox <=43 - 45
			// Elemen yang terputus dapat memiliki tampilan terkomputasi: tidak ada, jadi konfirmasikan terlebih dahulu apakah elemen tersebut ada
			// dalam dokumen.
			terlampir( elemen ) &&

			jQuery.css( elem, "tampilan" ) === "tidak ada";
	};



fungsi adjustCSS( elem, prop, valueParts, tween ) {
	var disesuaikan, skala,
		maxIterations = 20,
		Nilai saat ini = dua belas?
			fungsi() {
				return tween.cur();
			} :
			fungsi() {
				kembalikan jQuery.css( elem, prop, "" );
			},
		awal = Nilai saat ini(),
		unit = nilaiBagian && nilaiBagian[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Perhitungan nilai awal diperlukan untuk potensi ketidakcocokan unit
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elemen, prop ) );

	jika (initialInUnit &&initialInUnit[ 3 ] !== satuan ) {

		// Dukungan: Firefox <=54
		// Mengurangi separuh nilai target iterasi untuk mencegah interferensi dari batas atas CSS (gh-2144)
		inisial = inisial / 2;

		// Unit kepercayaan dilaporkan oleh jQuery.css
		satuan = satuan || inisialInUnit[ 3 ];

		// Secara iteratif memperkirakan dari titik awal yang bukan nol
		inisialInUnit = +awal || 1;

		while ( maxIterations-- ) {

			// Evaluasi dan perbarui tebakan terbaik kita (menggandakan tebakan yang nol).
			// Selesai jika skalanya sama atau melewati 1 (membuat produk lama*baru menjadi non-positif).
			jQuery.style( elemen, prop, inisialInUnit + unit );
			if ( ( 1 - skala ) * ( 1 - ( skala = CurrentValue() / awal || 0,5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			InitialInUnit = InitialInUnit / Skala;

		}

		InitialInUnit = InitialInUnit * 2;
		jQuery.style( elemen, prop, inisialInUnit + unit );

		// Pastikan kita memperbarui properti tween nanti
		valueParts = nilaiParts || [];
	}

	jika ( nilaiBagian ) {
		InitialInUnit = +initialInUnit || +awal || 0;

		// Terapkan offset relatif (+=/-=) jika ditentukan
		disesuaikan = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+nilaiBagian[ 2 ];
		jika ( dua belas ) {
			tween.unit = satuan;
			tween.start = inisialInUnit;
			tween.end = disesuaikan;
		}
	}
	pengembalian disesuaikan;
}


var defaultDisplayMap = {};

fungsi getDefaultDisplay( elemen ) {
	suhu bervariasi,
		doc = elem.pemilikDokumen,
		nodeName = elem.nodeName,
		tampilan = defaultDisplayMap[ nama node ];

	jika (tampilan) {
		tampilan kembali;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	tampilan = jQuery.css( temp, "tampilan" );

	temp.parentNode.removeChild( temp );

	jika ( tampilan === "tidak ada" ) {
		tampilan = "blok";
	}
	defaultDisplayMap[ nodeName ] = tampilan;

	tampilan kembali;
}

fungsi showHide( elemen, tampilkan ) {
	tampilan var, elemen,
		nilai = [],
		indeks = 0,
		panjang = elemen.panjang;

	// Tentukan nilai tampilan baru untuk elemen yang perlu diubah
	untuk ( ; indeks < panjang; indeks++ ) {
		elemen = elemen[ indeks ];
		if ( !elem.style ) {
			melanjutkan;
		}

		tampilan = elemen.style.display;
		jika ( tampilkan ) {

			// Karena kita memaksakan visibilitas pada elemen yang tersembunyi, secara langsung (dan lambat)
			// pemeriksaan diperlukan pada loop pertama ini kecuali kita mempunyai nilai tampilan yang tidak kosong (baik
			// inline atau akan dipulihkan)
			jika ( tampilan === "tidak ada" ) {
				nilai[ indeks ] = dataPriv.get( elemen, "tampilan" ) || batal;
				jika ( !nilai[ indeks ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				nilai[ indeks ] = getDefaultDisplay( elemen );
			}
		} kalau tidak {
			if ( tampilkan !== "tidak ada" ) {
				nilai[ indeks ] = "tidak ada";

				// Ingat apa yang kita timpa
				dataPriv.set( elemen, "tampilan", tampilan );
			}
		}
	}

	// Atur tampilan elemen dalam loop kedua untuk menghindari perubahan posisi yang konstan
	untuk ( indeks = 0; indeks < panjang; indeks++ ) {
		jika ( nilai[ indeks ] != null ) {
			elemen[ indeks ].style.display = nilai[ indeks ];
		}
	}

	elemen kembali;
}

jQuery.fn.perpanjang( {
	tampilkan: fungsi() {
		kembalikan showHide( ini, benar );
	},
	sembunyikan: fungsi() {
		kembalikan showHide( ini );
	},
	beralih: fungsi( status ) {
		if ( typeof state === "boolean" ) {
			keadaan kembali? ini.tampilkan() : ini.sembunyikan();
		}

		kembalikan ini.setiap( fungsi() {
			jika ( isHiddenWithinTree( ini ) ) {
				jQuery( ini ).tampilkan();
			} kalau tidak {
				jQuery( ini ).sembunyikan();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:kotak centang|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( fungsi() {
	var fragmen = dokumen.createDocumentFragment(),
		div = fragment.appendChild( dokumen.createElement( "div" ) ),
		masukan = dokumen.createElement( "masukan" );

	// Dukungan: Android 4.0 - 4.3 saja
	// Periksa status hilang jika nama disetel (trac-11217)
	// Dukungan: Aplikasi Web Windows (WWA)
	// `nama` dan `tipe` harus menggunakan .setAttribute untuk WWA (trac-14901)
	input.setAttribute("ketik", "radio" );
	input.setAttribute( "dicentang", "dicentang" );
	input.setAttribute("nama", "t" );

	div.appendChild( masukan );

	// Dukungan: Android <=4.1 saja
	// WebKit lama tidak mengkloning status yang diperiksa dengan benar dalam fragmen
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Dukungan: IE <=11 saja
	// Pastikan textarea (dan kotak centang) defaultValue dikloning dengan benar
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( benar ).lastChild.defaultValue;

	// Dukungan: IE <=9 saja
	// IE <=9 menggantikan tag <option> dengan isinya ketika disisipkan di luar
	// elemen pilih.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// Kita harus menutup tag ini untuk mendukung XHTML (trac-13200)
var bungkusMap = {

	// Parser XHTML tidak secara ajaib memasukkan elemen ke dalam
	// sama seperti yang dilakukan pengurai sup tag. Jadi kita tidak bisa mempersingkatnya
	// ini dengan menghilangkan <tbody> atau elemen lain yang diperlukan.
	judul: [ 1, "<tabel>", "</tabel>" ],
	kolom: [ 2, "<tabel><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<tabel><tbody>", "</tbody></tabel>" ],
	td: [ 3, "<tabel><tbody><tr>", "</tr></tbody></table>" ],

	_standar: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
bungkusMap.th = bungkusMap.td;

// Dukungan: IE <=9 saja
jika ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<pilih beberapa='beberapa'>", "</pilih>" ];
}


fungsi getAll( konteks, tag ) {

	// Dukungan: IE <=9 - 11 saja
	// Gunakan typeof untuk menghindari pemanggilan metode argumen nol pada objek host (trac-15151)
	var ret;

	if ( typeof konteks.getElementsByTagName !== "tidak terdefinisi" ) {
		ret = konteks.getElementsByTagName( tag || "*" );

	} else if ( typeof konteks.querySelectorAll !== "tidak terdefinisi" ) {
		ret = konteks.querySelectorAll( tag || "*" );

	} kalau tidak {
		kembali = [];
	}

	if ( tag === tidak terdefinisi || tag && nodeName( konteks, tag ) ) {
		kembalikan jQuery.merge( [ konteks ], ret );
	}

	kembali mundur;
}


// Tandai skrip sebagai telah dievaluasi
function setGlobalEval( elemen, refElements ) {
	var saya = 0,
		l = elemen.panjang;

	untuk ( ; saya < l; saya++ ) {
		dataPriv.set(
			elemen[ saya ],
			"Eval global",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elemen, konteks, skrip, pilihan, diabaikan ) {
	var elem, tmp, tag, bungkus, terlampir, j,
		fragmen = konteks.createDocumentFragment(),
		node = [],
		saya = 0,
		l = elemen.panjang;

	untuk ( ; saya < l; saya++ ) {
		elemen = elemen[ i ];

		jika ( elemen || elemen === 0 ) {

			// Tambahkan node secara langsung
			if ( toType( elem ) === "objek" ) {

				// Dukungan: Android <=4.0 saja, PhantomJS 1 saja
				// push.apply(_, arraylike) menggunakan WebKit kuno
				jQuery.merge( node, elem.nodeType ? [ elem ] : elem );

			// Ubah non-html menjadi node teks
			} lain jika ( !rhtml.test( elem ) ) {
				node.push( konteks.createTextNode( elem ) );

			// Ubah html menjadi node DOM
			} kalau tidak {
				tmp = tmp || fragment.appendChild( konteks.createElement( "div" ) );

				// Deserialisasi representasi standar
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				bungkus = bungkusPeta[ tag ] || wrapMap._default;
				tmp.innerHTML = bungkus[ 1 ] + jQuery.htmlPrefilter( elem ) + bungkus[ 2 ];

				// Turun melalui wrapper ke konten yang tepat
				j = bungkus[ 0 ];
				sementara ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Dukungan: Android <=4.0 saja, PhantomJS 1 saja
				// push.apply(_, arraylike) menggunakan WebKit kuno
				jQuery.merge( node, tmp.childNodes );

				// Ingat container tingkat atas
				tmp = fragment.firstChild;

				// Pastikan node yang dibuat adalah node yatim piatu (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Hapus pembungkus dari fragmen
	fragment.textContent = "";

	saya = 0;
	while ( ( elem = node[ i++ ] ) ) {

		// Lewati elemen yang sudah ada dalam kumpulan konteks (trac-4087)
		if ( pilihan && jQuery.inArray( elemen, pilihan ) > -1 ) {
			jika ( diabaikan ) {
				diabaikan.push( elem );
			}
			melanjutkan;
		}

		terlampir = terlampir( elemen );

		// Tambahkan ke fragmen
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Pertahankan riwayat evaluasi skrip
		jika ( terlampir ) {
			setGlobalEval( tmp );
		}

		// Tangkap file yang dapat dieksekusi
		jika ( skrip ) {
			j = 0;
			while ( ( elemen = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					skrip.push( elem );
				}
			}
		}
	}

	kembalikan fragmen;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

fungsi returnTrue() {
	kembali benar;
}

fungsi returnFalse() {
	kembali salah;
}

fungsi aktif( elem, tipe, pemilih, data, fn, satu ) {
	var asal, ketik;

	// Tipe dapat berupa peta tipe/penanganan
	if ( typeof tipe === "objek" ) {

		// ( tipe-Objek, pemilih, data )
		if (pemilih jenis !== "string" ) {

			// ( tipe-Objek, data )
			data = data || pemilih;
			pemilih = tidak terdefinisi;
		}
		untuk ( ketik tipe ) {
			on( elem, tipe, pemilih, data, tipe[ tipe ], satu );
		}
		kembalikan elemen;
	}

	jika ( data == nol && fn == nol ) {

		// ( tipe, fn )
		fn = pemilih;
		data = pemilih = tidak ditentukan;
	} lain jika ( fn == null ) {
		if (pemilih jenis === "string" ) {

			// ( tipe, pemilih, fn )
			fn = data;
			data = tidak terdefinisi;
		} kalau tidak {

			// ( tipe, data, fn )
			fn = data;
			data = pemilih;
			pemilih = tidak terdefinisi;
		}
	}
	jika ( fn === salah ) {
		fn = returnFalse;
	} lain jika ( !fn ) {
		kembalikan elemen;
	}

	jika ( satu === 1 ) {
		asalFn = fn;
		fn = fungsi( peristiwa ) {

			// Dapat menggunakan himpunan kosong, karena event berisi info
			jQuery().mati( acara );
			return origFn.apply( ini, argumen );
		};

		// Gunakan panduan yang sama sehingga penelepon dapat menghapus menggunakan origFn
		fn.guid = asalFn.guid || ( asalFn.guid = jQuery.guid++ );
	}
	kembalikan elemen.setiap( fungsi() {
		jQuery.event.add( ini, tipe, fn, data, pemilih );
	} );
}

/*
 * Fungsi pembantu untuk mengelola acara -- bukan bagian dari antarmuka publik.
 * Props ke perpustakaan addEvent Dean Edwards untuk banyak ide.
 */
jQuery.acara = {

	global: {},

	tambahkan: fungsi( elemen, tipe, penangan, data, pemilih ) {

		var handleObjIn, eventHandle, tmp,
			acara, t, handleObj,
			khusus, penangan, tipe, ruang nama, origType,
			elemData = dataPriv.get( elem );

		// Hanya lampirkan event ke objek yang menerima data
		jika ( !acceptData( elemen ) ) {
			kembali;
		}

		// Penelepon dapat meneruskan objek data khusus sebagai pengganti pengendali
		if (penangan.penangan) {
			handleObjIn = pengendali;
			handler = handleObjIn.handler;
			pemilih = handleObjIn.selector;
		}

		// Pastikan penyeleksi yang tidak valid memberikan pengecualian pada waktu lampiran
		// Evaluasi terhadap documentElement jika elem adalah node non-elemen (misalnya, dokumen)
		if (pemilih) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Pastikan handler mempunyai ID unik, yang digunakan untuk menemukan/menghapusnya nanti
		jika ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Inisiasi struktur event dan pengendali utama elemen, jika ini adalah yang pertama
		if ( !( events = elemData.events ) ) {
			peristiwa = elemData.events = Objek.buat( null );
		}
		jika ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = fungsi( e ) {

				// Buang event kedua dari jQuery.event.trigger() dan
				// ketika sebuah event dipanggil setelah halaman dibongkar
				kembalikan typeof jQuery !== "tidak terdefinisi" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elemen, argumen ): tidak terdefinisi;
			};
		}

		// Menangani beberapa peristiwa yang dipisahkan oleh spasi
		jenis = ( jenis || "" ).cocok( rnothtmlputih ) || [ "" ];
		t = jenis.panjang;
		sementara ( t-- ) {
			tmp = rtypenamespace.exec( jenis[ t ] ) || [];
			ketik = origType = tmp[ 1 ];
			ruang nama = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Di sana *harus * berupa tipe, tidak ada penangan khusus namespace yang melampirkan
			jika ( !ketik ) {
				melanjutkan;
			}

			// Jika event mengubah tipenya, gunakan event handler khusus untuk tipe yang diubah
			spesial = jQuery.event.special[ ketik ] || {};

			// Jika pemilih ditentukan, tentukan tipe api acara khusus, jika tidak, tipe tertentu
			ketik = (pemilih? special.delegateType : special.bindType ) || jenis;

			// Perbarui khusus berdasarkan tipe yang baru direset
			spesial = jQuery.event.special[ ketik ] || {};

			// handleObj diteruskan ke semua event handler
			handleObj = jQuery.memperpanjang( {
				tipe: tipe,
				Tipe asli: Tipe asli,
				data: data,
				pawang: pawang,
				panduan: handler.guid,
				pemilih: pemilih,
				kebutuhanContext: pemilih && jQuery.expr.match.needsContext.test( pemilih ),
				namespace: namespace.join( "." )
			}, handleObjIn );

			// Inisiasi antrian event handler jika kita yang pertama
			if ( !( penangan = kejadian[ mengetik ] ) ) {
				penangan = kejadian[ ketik ] = [];
				handlers.delegateCount = 0;

				// Hanya gunakan addEventListener jika pengendali event khusus menghasilkan nilai false
				jika ( !khusus.setup ||
					special.setup.call( elemen, data, namespace, eventHandle ) === false ) {

					jika ( elem.addEventListener ) {
						elem.addEventListener( ketik, eventHandle );
					}
				}
			}

			if (khusus.tambahkan) {
				special.add.call( elem, handleObj );

				jika ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Tambahkan ke daftar pengendali elemen, delegasikan di depan
			if (pemilih) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} kalau tidak {
				handler.push( handleObj );
			}

			// Melacak event mana yang pernah digunakan, untuk optimasi event
			jQuery.event.global[ mengetik ] = benar;
		}

	},

	// Melepaskan suatu peristiwa atau serangkaian peristiwa dari suatu elemen
	hapus: function( elem, tipe, handler, selector, mappedTypes ) {

		var j, jumlah asal, tmp,
			acara, t, handleObj,
			khusus, penangan, tipe, ruang nama, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			kembali;
		}

		// Sekali untuk setiap type.namespace dalam tipe; jenis dapat dihilangkan
		jenis = ( jenis || "" ).cocok( rnothtmlputih ) || [ "" ];
		t = jenis.panjang;
		sementara ( t-- ) {
			tmp = rtypenamespace.exec( jenis[ t ] ) || [];
			ketik = origType = tmp[ 1 ];
			ruang nama = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Lepas semua event (pada namespace ini, jika tersedia) untuk elemen tersebut
			jika ( !ketik ) {
				untuk ( ketik acara ) {
					jQuery.event.remove( elem, tipe + tipe[ t ], handler, selector, true );
				}
				melanjutkan;
			}

			spesial = jQuery.event.special[ ketik ] || {};
			ketik = (pemilih? special.delegateType : special.bindType ) || jenis;
			penangan = acara[ ketik ] || [];
			tmp = tmp[ 2 ] &&
				RegExp baru( "(^|\\.)" + namespace.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Hapus acara yang cocok
			asalHitung = j = penangan.panjang;
			sementara ( j-- ) {
				handleObj = penangan[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						pemilih === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if (khusus.hapus) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Hapus event handler generik jika kita menghapus sesuatu dan tidak ada lagi handler yang ada
			// (menghindari potensi rekursi tanpa akhir selama penghapusan event handler khusus)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespace, elemData.handle ) === false ) {

					jQuery.removeEvent( elemen, ketik, elemData.handle );
				}

				hapus acara[ ketik ];
			}
		}

		// Hapus data dan expando jika tidak digunakan lagi
		jika ( jQuery.isEmptyObject( peristiwa ) ) {
			dataPriv.remove( elem, "menangani kejadian" );
		}
	},

	pengiriman: fungsi( nativeEvent ) {

		var i, j, ret, cocok, handleObj, handlerQueue,
			args = Array baru( argumen.panjang ),

			// Membuat jQuery.Event yang dapat ditulis dari objek event asli
			acara = jQuery.event.fix( nativeEvent ),

			penangan = (
				dataPriv.get( ini, "acara" ) || Objek.buat( null )
			)[ acara.tipe ] || [],
			spesial = jQuery.event.special[ event.type ] || {};

		// Gunakan jQuery.Event yang telah diperbaiki daripada event asli (hanya baca).
		args[ 0 ] = kejadian;

		untuk ( i = 1; i < argumen.panjang; i++ ) {
			args[ i ] = argumen[ i ];
		}

		acara.delegateTarget = ini;

		// Panggil hook preDispatch untuk tipe yang dipetakan, dan biarkan ditebus jika diinginkan
		if ( special.preDispatch && special.preDispatch.call( ini, acara ) === false ) {
			kembali;
		}

		// Tentukan penangan
		handlerQueue = jQuery.event.handlers.call( ini, acara, penangan );

		// Jalankan delegasi terlebih dahulu; mereka mungkin ingin menghentikan penyebaran di bawah kita
		saya = 0;
		while ( ( cocok = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = cocok.elem;

			j = 0;
			while ( ( handleObj = cocok.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Jika event diberi namespace, maka setiap handler hanya dipanggil jika event tersebut diberi namespace
				// special universal atau namespacenya adalah superset dari event tersebut.
				jika ( !event.rnamespace || handleObj.namespace === false ||
					acara.rnamespace.test( handleObj.namespace ) ) {

					acara.handleObj = handleObj;
					acara.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( match.elem, args );

					jika ( kembali !== tidak terdefinisi ) {
						if ( ( event.result = ret ) === false ) {
							acara.preventDefault();
							acara.stopPropagation();
						}
					}
				}
			}
		}

		// Memanggil hook postDispatch untuk tipe yang dipetakan
		if ( khusus.postDispatch ) {
			special.postDispatch.call( ini, acara );
		}

		return event.hasil;
	},

	penangan: fungsi( kejadian, penangan ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegasiCount = handler.delegateCount,
			cur = acara.target;

		// Temukan penangan delegasi
		jika ( delegasiHitung &&

			// Dukungan: YAITU <=9
			// Pohon instance <use> SVG lubang hitam (trac-13180)
			sekarang.nodeType &&

			// Dukungan: Firefox <=42
			// Menekan klik yang melanggar spesifikasi yang menunjukkan tombol penunjuk non-utama (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Dukungan: IE 11 saja
			// ...tetapi bukan tombol panah "klik" pada input radio, yang dapat memiliki `tombol` -1 (gh-2343)
			!( event.type === "klik" && event.button >= 1 ) ) {

			untuk ( ; cur !== ini; cur = cur.parentNode || ini ) {

				// Jangan centang non-elemen (trac-13208)
				// Jangan memproses klik pada elemen yang dinonaktifkan (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "klik" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchSelectors = {};
					untuk ( i = 0; i < delegasiCount; i++ ) {
						handleObj = penangan[ i ];

						// Jangan bertentangan dengan properti Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === tidak terdefinisi ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, ini ).index( saat ini ) > -1 :
								jQuery.find( sel, ini, null, [ saat ini ] ).panjang;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.panjang ) {
						handlerQueue.push( { elemen: skr, penangan: matchedHandlers } );
					}
				}
			}
		}

		// Tambahkan penangan yang tersisa (terikat langsung).
		sekarang = ini;
		if ( delegasiCount < handlers.length ) {
			handlerQueue.push( { elem: skr, handler: handlers.slice( delegasiCount ) } );
		}

		kembalikan handlerQueue;
	},

	addProp: fungsi( nama, kait ) {
		Objek.defineProperty( jQuery.Event.prototype, nama, {
			dapat dihitung: benar,
			dapat dikonfigurasi: benar,

			dapatkan: isFunction( kait ) ?
				fungsi() {
					if ( this.originalEvent ) {
						kait kembali( this.originalEvent );
					}
				} :
				fungsi() {
					if ( this.originalEvent ) {
						kembalikan this.originalEvent[ nama ];
					}
				},

			set: fungsi( nilai ) {
				Objek.defineProperty( ini, nama, {
					dapat dihitung: benar,
					dapat dikonfigurasi: benar,
					dapat ditulis: benar,
					nilai: nilai
				} );
			}
		} );
	},

	perbaikan: fungsi( originalEvent ) {
		kembalikan originalEvent[ jQuery.expando ] ?
			Acara asli :
			jQuery.Event baru( originalEvent );
	},

	spesial: {
		memuat: {

			// Mencegah peristiwa image.load yang dipicu menggelembung ke window.load
			tidak ada Gelembung: benar
		},
		klik: {

			// Memanfaatkan kejadian asli untuk memastikan keadaan yang benar untuk masukan yang dapat diperiksa
			pengaturan: fungsi( data ) {

				// Untuk kompresibilitas timbal balik dengan _default, ganti akses `ini` dengan var lokal.
				// `|| data` adalah kode mati yang dimaksudkan hanya untuk mempertahankan variabel melalui minifikasi.
				var el = ini || data;

				// Klaim pengendali pertama
				jika ( rcheckableType.test( el.type ) &&
					el.klik && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "klik", ... )
					leverageNative( el, "klik", benar );
				}

				// Kembalikan false untuk memungkinkan pemrosesan normal pada pemanggil
				kembali salah;
			},
			pemicu: fungsi( data ) {

				// Untuk kompresibilitas timbal balik dengan _default, ganti akses `ini` dengan var lokal.
				// `|| data` adalah kode mati yang dimaksudkan hanya untuk mempertahankan variabel melalui minifikasi.
				var el = ini || data;

				// Paksa pengaturan sebelum memicu klik
				jika ( rcheckableType.test( el.type ) &&
					el.klik && nodeName( el, "input" ) ) {

					leverageNative( el, "klik" );
				}

				// Mengembalikan non-false untuk memungkinkan propagasi jalur kejadian normal
				kembali benar;
			},

			// Untuk konsistensi lintas-browser, sembunyikan .click() asli pada tautan
			// Cegah juga jika kita saat ini berada di dalam tumpukan peristiwa asli dengan leverage
			_default: fungsi( peristiwa ) {
				var target = acara.target;
				kembalikan rcheckableType.test( target.type ) &&
					target.klik && nodeName( target, "input" ) &&
					dataPriv.get( target, "klik" ) ||
					namanode(target, "a" );
			}
		},

		sebelum membongkar: {
			postDispatch: fungsi( acara ) {

				// Dukungan: Firefox 20+
				// Firefox tidak memberi peringatan jika kolom returnValue tidak disetel.
				if ( event.result !== tidak terdefinisi && event.originalEvent ) {
					event.originalEvent.returnValue = acara.hasil;
				}
			}
		}
	}
};

// Pastikan kehadiran event pendengar yang menangani pemicuan secara manual
// peristiwa sintetik dengan menghentikan kemajuan hingga dipanggil kembali sebagai respons
// *native* peristiwa yang dipicu secara langsung, memastikan bahwa perubahan status terjadi
// sudah terjadi sebelum pendengar lain dipanggil.
fungsi leverageNative( el, ketik, isSetup ) {

	// `isSetup` yang tidak ada menunjukkan panggilan pemicu, yang harus memaksa pengaturan melalui jQuery.event.add
	jika ( !isSetup ) {
		if ( dataPriv.get( el, ketik ) === tidak terdefinisi ) {
			jQuery.event.add( el, ketik, returnTrue );
		}
		kembali;
	}

	// Daftarkan pengontrol sebagai pengendali universal khusus untuk semua namespace acara
	dataPriv.set( el, ketik, salah );
	jQuery.event.add( el, ketik, {
		ruang nama: salah,
		pengendali: fungsi( kejadian ) {
			hasil var,
				disimpan = dataPriv.get( ini, ketik );

			if ( ( event.isTrigger & 1 ) && ini[ ketik ] ) {

				// Menginterupsi pemrosesan event .trigger()ed sintetik bagian luar
				jika ( !disimpan ) {

					// Menyimpan argumen untuk digunakan saat menangani kejadian asli dalam
					// Akan selalu ada setidaknya satu argumen (sebuah objek kejadian), jadi array ini
					// tidak akan tertukar dengan objek sisa tangkapan.
					disimpan = irisan.panggilan( argumen );
					dataPriv.set( ini, ketik, disimpan );

					// Memicu kejadian asli dan menangkap hasilnya
					tipe ini ]();
					hasil = dataPriv.get( ini, ketik );
					dataPriv.set( ini, ketik, salah );

					if ( disimpan !== hasil ) {

						// Membatalkan kejadian sintetik luar
						event.stopImmediatePropagation();
						acara.preventDefault();

						hasil pengembalian;
					}

				// Jika ini adalah kejadian sintetik dalam untuk kejadian dengan pengganti yang menggelegak
				// (fokus atau buram), asumsikan bahwa pengganti sudah disebarkan dari pemicuan
				// peristiwa asli dan mencegah hal itu terjadi lagi di sini.
				// Secara teknis ini membuat urutannya salah menjadi `.trigger()` (yang mana
				// pengganti yang menggelegak menyebar *setelah* basis yang tidak menggelembung), tapi sepertinya begitu
				// tidak seburuk duplikasi.
				} else if ( ( jQuery.event.special[ tipe ] || {} ).delegateType ) {
					acara.stopPropagation();
				}

			// Jika ini adalah kejadian asli yang dipicu di atas, semuanya sudah beres
			// Aktifkan event sintetik dalam dengan argumen asli
			} else if ( disimpan ) {

				// ...dan ambil hasilnya
				dataPriv.set( ini, ketik, jQuery.event.trigger(
					disimpan[ 0 ],
					disimpan.irisan( 1 ),
					ini
				) );

				// Batalkan penanganan event asli oleh semua penangan jQuery sambil mengizinkan
				// penangan asli pada elemen yang sama untuk dijalankan. Sesuai target, hal ini tercapai
				// dengan menghentikan propagasi langsung hanya pada event jQuery. Namun,
				// event asli dibungkus ulang dengan jQuery di setiap level
				// propagasi jadi satu-satunya cara untuk menghentikannya untuk jQuery adalah dengan menghentikannya
				// semuanya melalui `stopPropagation()` asli. Ini bukan masalah bagi
				// fokus/buram yang tidak menggelembung, namun juga menghentikan klik pada kotak centang
				// dan radio. Kami menerima batasan ini.
				acara.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = fungsi( elemen, ketik, pegangan ) {

	// "Jika" ini diperlukan untuk objek biasa
	jika ( elem.removeEventListener ) {
		elem.removeEventListener( ketik, pegangan );
	}
};

jQuery.Acara = fungsi( src, alat peraga ) {

	// Izinkan instantiasi tanpa kata kunci 'baru'
	if ( !( contoh jQuery.Event ini ) ) {
		kembalikan jQuery.Event baru( src, props );
	}

	// Objek acara
	jika ( src && src.tipe ) {
		this.originalEvent = src;
		this.type = src.type;

		// Peristiwa yang muncul di dokumen mungkin telah ditandai sebagai dicegah
		// oleh seorang pawang yang turun ke bawah pohon; mencerminkan nilai yang benar.
		ini.isDefaultPrevented = src.defaultPrevented ||
				src.defaultDicegah === tidak terdefinisi &&

				// Dukungan: Android <=2.3 saja
				src.returnValue === salah ?
			kembali Benar :
			returnFalse;

		// Buat properti target
		// Dukungan: Safari <=6 - 7 saja
		// Target tidak boleh berupa node teks (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.target saat ini = src.target saat ini;
		this.relatedTarget = src.relatedTarget;

	// Jenis acara
	} kalau tidak {
		this.type = src;
	}

	// Masukkan properti yang disediakan secara eksplisit ke objek acara
	jika ( alat peraga ) {
		jQuery.extend( ini, alat peraga );
	}

	// Buat stempel waktu jika acara masuk tidak memilikinya
	this.timeStamp = src && src.timeStamp || Tanggal.sekarang();

	// Tandai sebagai sudah diperbaiki
	ini[ jQuery.expando ] = benar;
};

// jQuery.Event didasarkan pada Event DOM3 sebagaimana ditentukan oleh Pengikatan Bahasa Skrip ECMA
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Acara.prototipe = {
	konstruktor: jQuery.Acara,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	disimulasikan: salah,

	mencegahDefault: fungsi() {
		var e = ini.acara asli;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagasi: fungsi() {
		var e = ini.acara asli;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagasi();
		}
	},
	stopImmediatePropagation: fungsi() {
		var e = ini.acara asli;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		ini.stopPropagation();
	}
};

// Menyertakan semua props event umum termasuk props khusus KeyEvent dan MouseEvent
jQuery.setiap( {
	altKey: benar,
	gelembung: benar,
	dapat dibatalkan: benar,
	berubahSentuhan: benar,
	ctrlKey: benar,
	detailnya: benar,
	fase peristiwa: benar,
	metaKey: benar,
	halamanX: benar,
	halamanY: benar,
	shiftKey: benar,
	pandangan: benar,
	"char": benar,
	kode: benar,
	kode char: benar,
	kunci: benar,
	kode kunci: benar,
	tombol: benar,
	tombol: benar,
	klienX: benar,
	klienY: benar,
	offsetX: benar,
	offsetY: benar,
	pointerId: benar,
	tipe penunjuk: benar,
	layarX: benar,
	layarY: benar,
	targetTouches: benar,
	toElement: benar,
	menyentuh: benar,
	yang: benar
}, jQuery.event.addProp );

jQuery.each( { fokus: "fokus", blur: "fokus" }, function( mengetik, tipe delegasi ) {

	fungsi fokusMappedHandler( nativeEvent ) {
		if ( dokumen.documentMode ) {

			// Dukungan: YAITU 11+
			// Lampirkan satu pengendali focusin/focusout pada dokumen ketika seseorang menginginkannya
			// fokus/buram. Hal ini karena yang pertama sinkron di IE sedangkan yang kedua
			// tidak sinkron. Di browser lain, semua penangan tersebut dipanggil secara serempak.

			// `handle` dari data pribadi sudah membungkus acara tersebut, tapi kita membutuhkannya
			// untuk mengubah `tipe` di sini.
			var handle = dataPriv.get( ini, "pegangan" ),
				acara = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "fokus" ? "fokus" : "kabur";
			acara.isSimulated = benar;

			// Pertama, tangani fokus masuk/fokus keluar
			menangani( nativeEvent );

			// ...lalu, tangani fokus/buram
			//
			// fokus/buram jangan menggelembung sementara fokus masuk/fokus keluar; simulasikan yang pertama hanya dengan
			// memanggil handler di level bawah.
			jika ( event.target === event.currentTarget ) {

				// Bagian penyiapan memanggil `leverageNative`, yang selanjutnya akan memanggil
				// `jQuery.event.add`, jadi event handle sudah disetel
				// pada titik ini.
				menangani( peristiwa );
			}
		} kalau tidak {

			// Untuk browser non-IE, lampirkan satu pengendali penangkap pada dokumen
			// ketika seseorang ingin fokus/fokus keluar.
			jQuery.event.simulate( delegasiType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.acara.khusus[ mengetik ] = {

		// Manfaatkan kejadian asli jika memungkinkan sehingga urutan blur/fokus benar
		pengaturan: fungsi() {

			var menempel;

			// Klaim pengendali pertama
			// dataPriv.set( ini, "fokus", ... )
			// dataPriv.set( ini, "kabur", ... )
			leverageNative( ini, ketik, benar );

			if ( dokumen.documentMode ) {

				// Dukungan: YAITU 9 - 11+
				// Kami menggunakan pengendali asli yang sama untuk fokus & fokus (dan fokus & buram)
				// jadi kita perlu mengoordinasikan bagian penyiapan & pembongkaran di antara peristiwa-peristiwa tersebut.
				// Gunakan `delegateType` sebagai kunci karena `type` sudah digunakan oleh `leverageNative`.
				melampirkan = dataPriv.get( ini, delegasiType );
				jika ( !melampirkan ) {
					this.addEventListener( delegasiType, focusMappedHandler );
				}
				dataPriv.set( ini, delegasiType, ( melampirkan || 0 ) + 1 );
			} kalau tidak {

				// Kembalikan false untuk memungkinkan pemrosesan normal pada pemanggil
				kembali salah;
			}
		},
		pemicu: fungsi() {

			// Paksa pengaturan sebelum pemicu
			leverageNative( ini, ketik );

			// Mengembalikan non-false untuk memungkinkan propagasi jalur kejadian normal
			kembali benar;
		},

		pembongkaran: fungsi() {
			var menempel;

			if ( dokumen.documentMode ) {
				melampirkan = dataPriv.get( ini, delegasiType ) - 1;
				jika ( !melampirkan ) {
					this.removeEventListener( delegasiType, focusMappedHandler );
					dataPriv.remove( ini, delegasiType );
				} kalau tidak {
					dataPriv.set( ini, delegasiType, lampirkan );
				}
			} kalau tidak {

				// Kembalikan false untuk menunjukkan pembongkaran standar harus diterapkan
				kembali salah;
			}
		},

		// Menekan fokus asli atau keburaman jika kita sedang berada di dalam
		// tumpukan kejadian asli dengan leverage
		_default: fungsi( peristiwa ) {
			kembalikan dataPriv.get( event.target, ketik );
		},

		tipe delegasi: tipe delegasi
	};

	// Dukungan: Firefox <=44
	// Firefox tidak memiliki acara fokus(masuk | keluar).
	// Tiket terkait - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Dukungan: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// peristiwa fokus(masuk | keluar) diaktifkan setelah peristiwa fokus & buram,
	// yang merupakan pelanggaran spesifikasi - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Tiket terkait - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Dukungan: YAITU 9 - 11+
	// Untuk mempertahankan urutan peristiwa focusin/focus & focusout/blur relatif dijamin pada cabang 3.x,
	// lampirkan satu pengendali untuk kedua kejadian di IE.
	jQuery.event.special[ tipe delegasi ] = {
		pengaturan: fungsi() {

			// Tangani: node reguler (melalui `this.ownerDocument`), jendela
			// (melalui `ini.dokumen`) & dokumen (melalui `ini`).
			var doc = ini.pemilikDokumen || ini.dokumen || ini,
				dataHolder = dokumen.documentMode ? ini : dok,
				melampirkan = dataPriv.get( dataHolder, delegasiType );

			// Dukungan: YAITU 9 - 11+
			// Kami menggunakan pengendali asli yang sama untuk fokus & fokus (dan fokus & buram)
			// jadi kita perlu mengoordinasikan bagian penyiapan & pembongkaran di antara peristiwa-peristiwa tersebut.
			// Gunakan `delegateType` sebagai kunci karena `type` sudah digunakan oleh `leverageNative`.
			jika ( !melampirkan ) {
				if ( dokumen.documentMode ) {
					this.addEventListener( delegasiType, focusMappedHandler );
				} kalau tidak {
					doc.addEventListener( ketik, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegasiType, ( melampirkan || 0 ) + 1 );
		},
		pembongkaran: fungsi() {
			var doc = ini.pemilikDokumen || ini.dokumen || ini,
				dataHolder = dokumen.documentMode ? ini : dok,
				melampirkan = dataPriv.get( dataHolder, delegasiType ) - 1;

			jika ( !melampirkan ) {
				if ( dokumen.documentMode ) {
					this.removeEventListener( delegasiType, focusMappedHandler );
				} kalau tidak {
					doc.removeEventListener( ketik, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegasiType );
			} kalau tidak {
				dataPriv.set( dataHolder, delegasiType, lampirkan );
			}
		}
	};
} );

// Membuat event mouseenter/leave menggunakan mouseover/out dan pemeriksaan waktu event
// agar delegasi acara berfungsi di jQuery.
// Lakukan hal yang sama untuk pointerenter/pointerleave dan pointerover/pointerout
//
// Dukungan: Safari 7 saja
// Safari terlalu sering mengirimkan mouseenter; melihat:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// untuk deskripsi bug (itu juga ada di versi Chrome yang lebih lama).
jQuery.setiap( {
	mouseenter: "arahkan mouse",
	cuti tikus: "keluar dari tikus",
	penunjuk masuk: "penunjuk",
	pointerleave: "penunjuk keluar"
}, fungsi( asal, perbaiki ) {
	jQuery.acara.khusus[ asal ] = {
		delegasiType: perbaiki,
		bindType: perbaiki,

		menangani: fungsi( peristiwa ) {
			var ret,
				sasaran = ini,
				terkait = acara.target terkait,
				handleObj = acara.handleObj;

			// Untuk mouseenter/leave, panggil handler jika yang bersangkutan berada di luar target.
			// NB: Tidak ada Target terkait jika mouse kiri/memasuki jendela browser
			if ( !terkait || ( terkait !== target && !jQuery.contains( target, terkait ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( ini, argumen );
				event.type = memperbaiki;
			}
			kembali mundur;
		}
	};
} );

jQuery.fn.perpanjang( {

	aktif: fungsi( tipe, pemilih, data, fn ) {
		return on( ini, tipe, pemilih, data, fn );
	},
	satu: fungsi( tipe, pemilih, data, fn ) {
		kembali (ini, tipe, pemilih, data, fn, 1 );
	},
	mati: fungsi( tipe, pemilih, fn ) {
		var handleObj, ketik;
		if ( tipe && tipe.preventDefault && tipe.handleObj ) {

			// (event) mengirimkan jQuery.Event
			handleObj = tipe.handleObj;
			jQuery( tipe.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			kembalikan ini;
		}
		if ( typeof tipe === "objek" ) {

			// ( tipe-objek [, pemilih] )
			untuk ( ketik tipe ) {
				this.off( tipe, pemilih, tipe[ tipe ] );
			}
			kembalikan ini;
		}
		if ( pemilih === false || jenis pemilih === "fungsi" ) {

			// ( mengetik [, fn] )
			fn = pemilih;
			pemilih = tidak terdefinisi;
		}
		jika ( fn === salah ) {
			fn = returnFalse;
		}
		kembalikan ini.setiap( fungsi() {
			jQuery.event.remove( ini, tipe, fn, pemilih );
		} );
	}
} );


var

	// Dukungan: IE <=10 - 11, Edge 12 - 13 saja
	// Di IE/Edge, penggunaan grup regex di sini menyebabkan pelambatan parah.
	// Lihat https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<skrip|<gaya|<link/i,

	// dicentang = "dicentang" atau dicentang
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Lebih memilih suatu benda dibandingkan tabel induknya karena memuat baris baru
manipulasi fungsiTarget( elemen, konten ) {
	if ( nodeName( elemen, "tabel" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		kembalikan jQuery( elem ).anak-anak( "tbody" )[ 0 ] || elemen;
	}

	kembalikan elemen;
}

// Ganti/pulihkan atribut tipe elemen skrip untuk manipulasi DOM yang aman
fungsi menonaktifkanScript( elemen ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	kembalikan elemen;
}
fungsi pemulihanScript( elemen ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} kalau tidak {
		elem.removeAttribute( "ketik" );
	}

	kembalikan elemen;
}

fungsi cloneCopyEvent( src, tujuan ) {
	var i, l, ketik, pdataOld, udataOld, udataCur, events;

	jika ( tujuan.nodeType !== 1 ) {
		kembali;
	}

	// 1. Salin data pribadi: peristiwa, penangan, dll.
	jika ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		acara = pdataOld.events;

		jika ( kejadian ) {
			dataPriv.remove( tujuan, "menangani kejadian" );

			untuk ( ketik acara ) {
				untuk ( i = 0, l = kejadian[ ketik ].panjang; i < l; i++ ) {
					jQuery.event.add( tujuan, tipe, acara[ tipe ][ i ] );
				}
			}
		}
	}

	// 2. Salin data pengguna
	jika ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( tujuan, udataCur );
	}
}

// Perbaiki bug IE, lihat tes dukungan
fungsi fixInput( src, tujuan ) {
	var nodeName = tujuan.nodeName.toLowerCase();

	// Gagal mempertahankan status tercentang pada kotak centang atau tombol radio yang dikloning.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		tujuan.diperiksa = src.diperiksa;

	// Gagal mengembalikan opsi yang dipilih ke status default yang dipilih saat mengkloning opsi
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

fungsi domManip( koleksi, argumen, panggilan balik, diabaikan ) {

	// Ratakan semua array yang disarangkan
	args = datar( args );

	fragmen var, pertama, skrip, hasScripts, node, doc,
		saya = 0,
		l = koleksi.panjang,
		iNoClone = l - 1,
		nilai = argumen[ 0 ],
		nilaiIsFunction = isFunction( nilai );

	// Kami tidak dapat mengkloning fragmen Node yang berisi tanda centang di WebKit
	jika ( nilaiIsFungsi ||
			( l > 1 && jenis nilai === "string" &&
				!support.checkClone && rchecked.test( nilai ) ) ) {
		kembalikan koleksi.setiap( fungsi( indeks ) {
			var self = koleksi.eq( indeks );
			jika ( nilaiIsFungsi ) {
				args[ 0 ] = nilai.panggilan( ini, indeks, mandiri.html() );
			}
			domManip( mandiri, args, panggilan balik, diabaikan );
		} );
	}

	jika ( aku ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, diabaikan );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragmen = pertama;
		}

		// Membutuhkan konten baru atau ketertarikan pada elemen yang diabaikan untuk memanggil callback
		if ( pertama || diabaikan ) {
			skrip = jQuery.map( getAll( fragmen, "skrip" ), nonaktifkanScript );
			hasScripts = skrip.panjang;

			// Gunakan fragmen asli untuk item terakhir
			// dari pada yang pertama karena bisa berakhir
			// dikosongkan secara tidak benar dalam situasi tertentu (trac-8070).
			untuk ( ; saya < l; saya++ ) {
				simpul = fragmen;

				jika ( saya !== iNoClone ) {
					simpul = jQuery.clone( simpul, benar, benar );

					// Simpan referensi ke skrip kloning untuk restorasi nanti
					jika ( hasScript ) {

						// Dukungan: Android <=4.0 saja, PhantomJS 1 saja
						// push.apply(_, arraylike) menggunakan WebKit kuno
						jQuery.merge( skrip, getAll( simpul, "skrip" ) );
					}
				}

				panggilan balik.panggilan( koleksi[ i ], simpul, i );
			}

			jika (hasScript) {
				doc = skrip[ skrip.panjang - 1 ].pemilikDokumen;

				// Mengaktifkan kembali skrip
				jQuery.map( skrip, restorasiScript );

				// Evaluasi skrip yang dapat dieksekusi pada penyisipan dokumen pertama
				untuk ( saya = 0; saya < hasScripts; i++ ) {
					simpul = skrip[ i ];
					jika ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( simpul, "globalEval" ) &&
						jQuery.berisi( dokumen, simpul ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase() !== "modul" ) {

							// Ketergantungan AJAX opsional, tetapi skrip tidak akan dijalankan jika tidak ada
							jika ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( simpul.src, {
									nonce: simpul.nonce || simpul.getAttribute( "nonce")
								}, dok);
							}
						} kalau tidak {

							// Buka bagian CDATA yang berisi konten skrip. Ini tidak seharusnya terjadi
							// diperlukan karena dalam dokumen XML dokumen tersebut sudah tidak terlihat kapan
							// memeriksa konten elemen dan dalam dokumen HTML tidak ada
							// maksudnya tapi kami mempertahankan logika itu untuk kompatibilitas ke belakang.
							// Ini akan dihapus sepenuhnya di 4.0. Lihat gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	pengumpulan kembali;
}

fungsi hapus( elem, pemilih, keepData ) {
	simpul var,
		node = pemilih? jQuery.filter( pemilih, elemen ): elemen,
		saya = 0;

	untuk ( ; ( simpul = simpul[ i ] ) != null; i++ ) {
		jika ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( simpul ) );
		}

		if ( simpul.parentNode ) {
			jika ( keepData && isAttached( simpul ) ) {
				setGlobalEval( getAll( simpul, "skrip" ) );
			}
			node.parentNode.removeChild( simpul );
		}
	}

	kembalikan elemen;
}

jQuery.perpanjang( {
	htmlPrafilter: fungsi( html ) {
		kembalikan html;
	},

	klon: fungsi( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( benar ),
			inPage = isAttached( elemen );

		// Perbaiki masalah kloning IE
		jika ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elemen ) ) {

			// Kami menghindari jQuery#find di sini karena alasan kinerja:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( klon );
			srcElements = getAll( elemen );

			untuk ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Salin kejadian dari yang asli ke klon
		jika ( dataAndEvents ) {
			jika ( deepDataAndEvents ) {
				srcElements = srcElements || dapatkanSemua( elemen );
				Elemen tujuan = Elemen tujuan || getAll( klon );

				untuk ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} kalau tidak {
				cloneCopyEvent( elemen, klon );
			}
		}

		// Pertahankan riwayat evaluasi skrip
		destElements = getAll( clone, "skrip" );
		jika ( destElements.panjang > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Mengembalikan set hasil kloning
		kembalikan klon;
	},

	data bersih: fungsi( elemen ) {
		var data, elemen, tipe,
			spesial = jQuery.event.khusus,
			saya = 0;

		untuk ( ; ( elemen = elemen[ i ] ) !== tidak terdefinisi; i++ ) {
			jika ( menerimaData( elemen ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.acara ) {
						untuk ( ketik data.acara ) {
							if ( khusus[ tipe ] ) {
								jQuery.event.remove( elem, ketik );

							// Ini adalah jalan pintas untuk menghindari overhead jQuery.event.remove
							} kalau tidak {
								jQuery.removeEvent( elemen, tipe, data.handle );
							}
						}
					}

					// Dukungan: Chrome <=35 - 45+
					// Tetapkan tidak terdefinisi alih-alih menggunakan hapus, lihat Data#hapus
					elem[ dataPriv.expando ] = tidak terdefinisi;
				}
				if ( elem[ dataUser.expando ] ) {

					// Dukungan: Chrome <=35 - 45+
					// Tetapkan tidak terdefinisi alih-alih menggunakan hapus, lihat Data#hapus
					elem[ dataUser.expando ] = tidak terdefinisi;
				}
			}
		}
	}
} );

jQuery.fn.perpanjang( {
	lepaskan: fungsi( pemilih ) {
		kembali hapus( ini, pemilih, benar );
	},

	hapus: fungsi( pemilih ) {
		kembali hapus( ini, pemilih );
	},

	teks: fungsi( nilai ) {
		mengembalikan akses( ini, fungsi( nilai ) {
			nilai kembalian === tidak terdefinisi?
				jQuery.teks( ini ):
				ini.kosong().setiap( fungsi() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = nilai;
					}
				} );
		}, null, nilai, argumen.panjang );
	},

	tambahkan: fungsi() {
		kembalikan domManip( ini, argumen, fungsi( elemen ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulasiTarget( ini, elemen );
				target.appendChild( elemen );
			}
		} );
	},

	tambahkan: fungsi() {
		kembalikan domManip( ini, argumen, fungsi( elemen ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulasiTarget( ini, elemen );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	sebelumnya: fungsi() {
		kembalikan domManip( ini, argumen, fungsi( elemen ) {
			jika ( ini.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	setelah: fungsi() {
		kembalikan domManip( ini, argumen, fungsi( elemen ) {
			jika ( ini.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	kosong: fungsi() {
		var elemen,
			saya = 0;

		untuk ( ; ( elem = ini[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Mencegah kebocoran memori
				jQuery.cleanData( getAll( elem, false ) );

				// Hapus semua node yang tersisa
				elem.textContent = "";
			}
		}

		kembalikan ini;
	},

	klon: fungsi( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? salah : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		kembalikan ini.peta( fungsi() {
			kembalikan jQuery.clone( ini, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: fungsi( nilai ) {
		mengembalikan akses( ini, fungsi( nilai ) {
			var elemen = ini[ 0 ] || {},
				saya = 0,
				l = ini.panjang;

			if ( nilai === tidak terdefinisi && elem.nodeType === 1 ) {
				kembalikan elemen.innerHTML;
			}

			// Lihat apakah kita bisa mengambil jalan pintas dan cukup menggunakan innerHTML
			jika ( jenis nilai === "string" && !rnoInnerhtml.test( nilai ) &&
				!wrapMap[ ( rtagName.exec( nilai ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				nilai = jQuery.htmlPrefilter( nilai );

				mencoba {
					untuk ( ; saya < l; saya++ ) {
						elemen = ini[ saya ] || {};

						// Hapus node elemen dan cegah kebocoran memori
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = nilai;
						}
					}

					elemen = 0;

				// Jika penggunaan innerHTML menimbulkan pengecualian, gunakan metode fallback
				} tangkap ( e ) {}
			}

			jika ( elemen ) {
				ini.kosong().tambahkan( nilai );
			}
		}, null, nilai, argumen.panjang );
	},

	gantiDengan: fungsi() {
		var diabaikan = [];

		// Buat perubahan, ganti setiap elemen konteks yang tidak diabaikan dengan konten baru
		kembalikan domManip( ini, argumen, fungsi( elemen ) {
			var induk = ini.parentNode;

			if ( jQuery.inArray( ini, diabaikan ) < 0 ) {
				jQuery.cleanData( getAll( ini ) );
				jika (orang tua) {
					parent.replaceChild( elem, ini );
				}
			}

		// Memaksa pemanggilan panggilan balik
		}, diabaikan );
	}
} );

jQuery.setiap( {
	appendTo: "tambahkan",
	prependTo: "tambahkan",
	masukkanSebelum: "sebelum",
	insertAfter: "setelah",
	gantiSemua: "gantiDengan"
}, fungsi( nama, asli ) {
	jQuery.fn[ nama ] = fungsi( pemilih ) {
		var elemen,
			kembali = [],
			masukkan = jQuery( pemilih ),
			terakhir = masukkan.panjang - 1,
			saya = 0;

		untuk ( ; saya <= terakhir; i++ ) {
			elemen = i === terakhir? ini : ini.klon( benar );
			jQuery( masukkan[ i ] )[ asli ]( elemen );

			// Dukungan: Android <=4.0 saja, PhantomJS 1 saja
			// .get() karena Push.apply(_, arraylike) menggunakan WebKit kuno
			push.apply( ret, elems.get() );
		}

		kembalikan ini.pushStack( ret );
	};
} );
var rnumnonpx = RegExp baru( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = fungsi( elemen ) {

		// Dukungan: IE <=11 saja, Firefox <=30 (trac-15098, trac-14150)
		// IE menampilkan elemen yang dibuat dalam popup
		// FF sementara itu menggunakan elemen bingkai melalui "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			pemandangan = jendela;
		}

		kembalikan tampilan.getComputedStyle( elem );
	};

var swap = fungsi( elemen, opsi, panggilan balik ) {
	var ret, nama,
		lama = {};

	// Ingat nilai lama, dan masukkan nilai baru
	untuk (nama dalam opsi) {
		lama[ nama ] = elem.style[ nama ];
		elem.style[ nama ] = opsi[ nama ];
	}

	ret = panggilan balik.panggilan( elem );

	// Mengembalikan nilai lama
	untuk (nama dalam opsi) {
		elem.style[ nama ] = lama[ nama ];
	}

	kembali mundur;
};


var rboxStyle = RegExp baru( cssExpand.join( "|" ), "i" );



( fungsi() {

	// Mengeksekusi pengujian pixelPosition & boxSizingReliable hanya memerlukan satu tata letak
	// sehingga keduanya dieksekusi pada waktu yang sama untuk menyimpan komputasi kedua.
	fungsi komputasiStyleTests() {

		// Ini adalah singleton, kita hanya perlu mengeksekusinya sekali saja
		jika ( !div ) {
			kembali;
		}

		container.style.cssText = "posisi:absolute;kiri:-11111px;lebar:60px;" +
			"margin-top:1px;padding:0;batas:0";
		div.style.cssText =
			"posisi:relatif;tampilan:blok;ukuran kotak:kotak batas;luapan:gulir;" +
			"margin:otomatis;batas:1px;padding:1px;" +
			"lebar:60%;atas:1%";
		documentElement.appendChild( wadah ).appendChild( div );

		var divStyle = jendela.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Dukungan: Android 4.0 - 4.3 saja, Firefox <=3 - 44
		handalMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Dukungan: Android 4.0 - 4.3 saja, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Beberapa gaya muncul dengan nilai persentase, meskipun sebenarnya tidak
		div.style.kanan = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Dukungan: IE 9 - 11 saja
		// Mendeteksi kesalahan pelaporan dimensi konten untuk elemen ukuran kotak: kotak batas
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Dukungan: IE 9 saja
		// Deteksi luapan: keacakan gulir (gh-3699)
		// Dukungan: Chrome <=64
		// Jangan tertipu ketika zoom mempengaruhi offsetWidth (gh-4029)
		div.style.position = "mutlak";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( wadah );

		// Batalkan div agar tidak tersimpan di memori dan
		// itu juga akan menjadi tanda bahwa pemeriksaan telah dilakukan
		div = nol;
	}

	fungsi roundPixelMeasures( mengukur ) {
		return Math.round( parseFloat( mengukur ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		dapat diandalkanTrDimensionsVal, dapat diandalkanMarginLeftVal,
		wadah = dokumen.createElement( "div" ),
		div = dokumen.createElement( "div" );

	// Selesaikan lebih awal di lingkungan terbatas (non-browser).
	if ( !div.style ) {
		kembali;
	}

	// Dukungan: IE <=9 - 11 saja
	// Gaya elemen yang dikloning memengaruhi elemen sumber yang dikloning (trac-8908)
	div.style.backgroundClip = "kotak konten";
	div.cloneNode( benar ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "kotak konten";

	jQuery.extend( dukungan, {
		boxSizingReliable: fungsi() {
			komputasiStyleTests();
			kotak kembaliSizingReliableVal;
		},
		pixelBoxStyles: fungsi() {
			komputasiStyleTests();
			kembalikan pixelBoxStylesVal;
		},
		posisi piksel: fungsi() {
			komputasiStyleTests();
			kembalikan pixelPositionVal;
		},
		handalMarginLeft: fungsi() {
			komputasiStyleTests();
			kembalikan HandalMarginLeftVal;
		},
		scrollboxUkuran: fungsi() {
			komputasiStyleTests();
			kembalikan scrollboxSizeVal;
		},

		// Dukungan: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge salah melaporkan `getComputedStyle` baris tabel dengan lebar/tinggi
		// atur dalam CSS sementara properti `offset*` melaporkan nilai yang benar.
		// Perilaku di IE 9 lebih halus dibandingkan versi yang lebih baru & lolos
		// beberapa versi pengujian ini; pastikan untuk tidak berhasil melewati sana!
		//
		// Dukungan: Firefox 70+
		// Hanya Firefox yang menyertakan lebar batas
		// dalam dimensi yang dihitung. (gh-4529)
		dapat diandalkanTrDimensi: fungsi() {
			var tabel, tr, trAnak, trStyle;
			jika ( dapat diandalkanTrDimensionsVal == null ) {
				tabel = dokumen.createElement( "tabel" );
				tr = dokumen.createElement( "tr" );
				trChild = dokumen.createElement( "div" );

				table.style.cssText = "posisi:mutlak;kiri:-11111px;runtuhnya batas:terpisah";
				tr.style.cssText = "batas:1 piksel padat";

				// Dukungan: Chrome 86+
				// Ketinggian yang disetel melalui cssText tidak diterapkan.
				// Tinggi yang dihitung kemudian kembali sebagai 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Dukungan: Android 8 Chrome 86+
				// Di iframe bodyBackground.html kita,
				// tampilan untuk semua elemen div diatur ke "inline",
				// yang menyebabkan masalah hanya di Android 8 Chrome 86.
				// Memastikan divnya adalah display: block
				// mengatasi masalah ini.
				trChild.style.display = "blok";

				elemen dokumen
					.appendChild( tabel )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = jendela.getComputedStyle( tr );
				dapat diandalkanTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( tabel );
			}
			kembalikan TrDimensionsVal yang andal;
		}
	} );
} )();


fungsi curCSS( elemen, nama, dihitung ) {
	lebar var, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( nama ),

		// Dukungan: Firefox 51+
		// Mengambil gaya sebelum dihitung
		// memperbaiki masalah dengan mendapatkan nilai yang salah
		// pada elemen yang terpisah
		gaya = elemen.gaya;

	dihitung = dihitung || getStyles( elemen );

	// getPropertyValue diperlukan untuk:
	// .css('filter') (khusus IE 9, trac-12537)
	// .css('--customProperty) (gh-3144)
	jika ( dihitung ) {

		// Dukungan: YAITU <=9 - 11+
		// IE hanya mendukung `"float"` di `getPropertyValue`; dalam gaya yang dihitung
		// ini hanya tersedia sebagai `"cssFloat"`. Kami tidak lagi mengubah properti
		// dikirim ke `.css()` selain camelCasing, jadi kita perlu memeriksa keduanya.
		// Biasanya, ini akan menciptakan perbedaan perilaku: if
		// `getPropertyValue` mengembalikan string kosong, nilai dikembalikan
		// oleh `.css()` akan menjadi `tidak terdefinisi`. Hal ini biasanya terjadi pada
		// elemen terputus. Namun, di IE malah elemennya terputus
		// tanpa gaya, kembalikan `"none"` untuk `getPropertyValue( "float" )`
		ret = dihitung.getPropertyValue( nama ) || dihitung[ nama ];

		jika ( isCustomProp && ret ) {

			// Dukungan: Firefox 105+, Chrome <=105+
			// Spesifikasi memerlukan pemangkasan spasi untuk properti khusus (gh-4926).
			// Firefox hanya memangkas spasi di depan. Chrome baru saja runtuh
			// spasi di depan dan di belakang menjadi satu spasi.
			//
			// Kembali ke `tidak terdefinisi` jika string kosong dikembalikan.
			// Ini menghilangkan definisi yang hilang dengan properti yang ditentukan
			// dan disetel ke string kosong tetapi tidak ada API standar
			// memungkinkan kami membedakannya tanpa penalti performa
			// dan mengembalikan `undefinisi` sejajar dengan jQuery lama.
			//
			// rtrimCSS memperlakukan U+000D CARRIAGE RETURN dan U+000C FORM FEED
			// sebagai spasi sedangkan CSS tidak, tapi ini tidak menjadi masalah
			// karena pra-pemrosesan CSS menggantikannya dengan U+000A LINE FEED
			// (yang *adalah* spasi CSS)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.ganti( rtrimCSS, "$1" ) || belum diartikan;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elemen, nama );
		}

		// Penghargaan untuk "peretasan luar biasa dari Dean Edwards"
		// Browser Android mengembalikan persentase untuk beberapa nilai,
		// tetapi lebarnya tampaknya merupakan piksel yang andal.
		// Ini bertentangan dengan spesifikasi draf CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( nama ) ) {

			// Ingat nilai aslinya
			lebar = gaya.lebar;
			minWidth = style.minWidth;
			maxWidth = gaya.maxWidth;

			// Masukkan nilai baru untuk mendapatkan nilai yang dihitung
			style.minWidth = style.maxWidth = style.width = ret;
			ret = dihitung.lebar;

			// Mengembalikan nilai yang diubah
			style.lebar = lebar;
			style.minWidth = minLebar;
			style.maxWidth = maxWidth;
		}
	}

	kembali ret !== tidak terdefinisi ?

		// Dukungan: IE <=9 - 11 saja
		// IE mengembalikan nilai zIndex sebagai bilangan bulat.
		ret + "" :
		membasahi;
}


fungsi addGetHookIf( kondisiFn, hookFn ) {

	// Tentukan pengaitnya, kita akan memeriksa pada proses pertama apakah itu benar-benar diperlukan.
	kembali {
		dapatkan: fungsi() {
			jika ( kondisiFn() ) {

				// Hook tidak diperlukan (atau tidak dapat digunakan karena itu
				// hingga ketergantungan hilang), hapus.
				hapus ini.dapatkan;
				kembali;
			}

			// Diperlukan kait; mendefinisikannya kembali sehingga pengujian dukungan tidak dijalankan lagi.
			kembali ( ini.dapatkan = hookFn ).berlaku( ini, argumen );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	kosongStyle = dokumen.createElement( "div" ).style,
	vendorProps = {};

// Mengembalikan properti yang diawali vendor atau tidak ditentukan
fungsi vendorPropName( nama ) {

	// Periksa nama awalan vendor
	var capName = nama[ 0 ].toUpperCase() + nama.slice( 1 ),
		i = cssPrefixes.panjang;

	ketika saya-- ) {
		nama = cssPrefixes[ i ] + capName;
		if ( nama dalam gaya kosong ) {
			nama kembali;
		}
	}
}

// Mengembalikan properti jQuery.cssProps atau properti awalan vendor yang berpotensi dipetakan
fungsi finalPropName( nama ) {
	var final = jQuery.cssProps[ nama ] || vendorProps[ nama ];

	jika ( terakhir ) {
		kembali terakhir;
	}
	if ( nama dalam gaya kosong ) {
		nama kembali;
	}
	kembalikan vendorProps[ nama ] = vendorPropName( nama ) || nama;
}


var

	// Dapat ditukar jika tampilan tidak ada atau dimulai dengan tabel
	// kecuali "tabel", "sel-tabel", atau "keterangan tabel"
	// Lihat di sini untuk nilai tampilan: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(tidak ada|tabel(?!-c[ea]).+)/,
	cssShow = { posisi: "mutlak", visibilitas: "tersembunyi", tampilan: "blok" },
	cssNormalTransformasi = {
		spasi huruf: "0",
		Berat font: "400"
	};

fungsi setPositiveNumber( _elem, nilai, kurangi ) {

	// Nilai relatif (+/-) apa pun sudah ada
	// dinormalisasi pada saat ini
	var cocok = rcssNum.exec( nilai );
	pertandingan kembali?

		// Lindungi dari "pengurangan" yang tidak ditentukan, misalnya, ketika digunakan seperti di cssHooks
		Math.max( 0, cocok[ 2 ] - ( kurangi || 0 ) ) + ( cocok[ 3 ] || "px" ) :
		nilai;
}

function boxModelAdjustment( elemen, dimensi, kotak, isBorderBox, gaya, computedVal ) {
	var i = dimensi === "lebar" ? 1 : 0,
		tambahan = 0,
		delta = 0,
		marginDelta = 0;

	// Penyesuaian mungkin tidak diperlukan
	if ( kotak === ( isBorderBox ? "perbatasan" : "konten" ) ) {
		kembali 0;
	}

	untuk ( ; saya < 4; saya += 2 ) {

		// Kedua model kotak tidak menyertakan margin
		// Hitung margin delta secara terpisah untuk hanya menambahkannya setelah penyesuaian alur gulir.
		// Ini diperlukan agar margin negatif berfungsi dengan `outerHeight( true )` (gh-3982).
		if ( kotak === "margin" ) {
			marginDelta += jQuery.css( elemen, kotak + cssExpand[ i ], benar, gaya );
		}

		// Jika kita tiba di sini dengan kotak konten, kita mencari "padding" atau "border" atau "margin"
		jika ( !isBorderBox ) {

			// Tambahkan bantalan
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], benar, gaya );

			// Untuk "batas" atau "margin", tambahkan batas
			if ( kotak !== "padding" ) {
				delta += jQuery.css( elem, "perbatasan" + cssExpand[ i ] + "Lebar", benar, gaya );

			// Tapi tetap pantau sebaliknya
			} kalau tidak {
				ekstra += jQuery.css( elem, "perbatasan" + cssExpand[ i ] + "Lebar", benar, gaya );
			}

		// Jika kita tiba di sini dengan kotak pembatas (konten + padding + pembatas), kita mencari "konten" atau
		// "padding" atau "margin"
		} kalau tidak {

			// Untuk "konten", kurangi padding
			if ( kotak === "isi" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], benar, gaya );
			}

			// Untuk "konten" atau "padding", kurangi batas
			if ( kotak !== "margin" ) {
				delta -= jQuery.css( elem, "perbatasan" + cssExpand[ i ] + "Lebar", benar, gaya );
			}
		}
	}

	// Perhitungkan selokan gulir kotak konten positif saat diminta dengan menyediakan ComputedVal
	jika ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight adalah jumlah bulat dari konten, padding, scroll gutter, dan border
		// Dengan asumsi selokan gulir bilangan bulat, kurangi sisanya dan bulatkan ke bawah
		delta += Matematika.max( 0, Matematika.ceil(
			elemen[ "offset" + dimensi[ 0 ].toUpperCase() + dimensi.slice( 1 ) ] -
			Val dihitung -
			delta -
			ekstra -
			0,5

		// Jika offsetWidth/offsetHeight tidak diketahui, maka kita tidak dapat menentukan selokan gulir kotak konten
		// Gunakan nol eksplisit untuk menghindari NaN (gh-3964)
		) ) || 0;
	}

	kembali delta + marginDelta;
}

function getWidthOrHeight( elemen, dimensi, ekstra ) {

	// Mulai dengan gaya terkomputasi
	var gaya = getStyles( elemen ),

		// Untuk menghindari pemaksaan penyesuaian posisi, ambil boxSizing hanya jika kita memerlukannya (gh-4322).
		// Kotak konten palsu sampai kita tahu bahwa itu diperlukan untuk mengetahui nilai sebenarnya.
		boxSizingNeeded = !support.boxSizingReliable() || tambahan,
		isBorderBox = kotakSizingDibutuhkan &&
			jQuery.css( elem, "boxSizing", false, style ) === "kotak perbatasan",
		nilaiIsBorderBox = isBorderBox,

		val = curCSS( elemen, dimensi, gaya ),
		offsetProp = "offset" + dimensi[ 0 ].toUpperCase() + dimensi.slice( 1 );

	// Dukungan: Firefox <=54
	// Kembalikan nilai non-piksel yang membingungkan atau pura-pura tidak tahu, jika perlu.
	jika ( rnumnonpx.test( val ) ) {
		jika ( !ekstra ) {
			kembali val;
		}
		val = "otomatis";
	}


	// Dukungan: IE 9 - 11 saja
	// Gunakan offsetWidth/offsetHeight ketika ukuran kotak tidak dapat diandalkan.
	// Dalam kasus tersebut, nilai yang dihitung dapat dipercaya sebagai kotak batas.
	jika ( ( !support.boxSizingReliable() && isBorderBox ||

		// Dukungan: YAITU 10 - 11+, Edge 15 - 18+
		// IE/Edge salah melaporkan `getComputedStyle` baris tabel dengan lebar/tinggi
		// atur dalam CSS sementara properti `offset*` melaporkan nilai yang benar.
		// Menariknya, dalam beberapa kasus IE 9 tidak mengalami masalah ini.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Kembali ke offsetWidth/offsetHeight ketika nilainya "otomatis"
		// Ini terjadi pada elemen sebaris tanpa pengaturan eksplisit (gh-3571)
		val === "otomatis" ||

		// Dukungan: Android <=4.1 - 4.3 saja
		// Gunakan juga offsetWidth/offsetHeight untuk dimensi inline yang salah dilaporkan (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, style ) === "inline" ) &&

		// Pastikan elemen terlihat & terhubung
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, style ) === "border-box";

		// Jika tersedia, offsetWidth/offsetHeight memperkirakan dimensi kotak batas.
		// Jika tidak tersedia (misalnya, SVG), asumsikan ukuran kotak tidak dapat diandalkan dan tafsirkan
		// mengambil nilai sebagai dimensi kotak konten.
		valueIsBorderBox = offsetProp di elemen;
		jika ( nilaiIsBorderBox ) {
			val = elemen[ offsetProp ];
		}
	}

	// Normalisasikan "" dan otomatis
	val = parseFloat( val ) || 0;

	// Sesuaikan dengan model kotak elemen
	kembali ( val +
		kotakModelPenyesuaian(
			elemen,
			dimensi,
			tambahan || ( isBorderBox ? "perbatasan" : "konten" ),
			nilaiIsBorderBox,
			gaya,

			// Berikan ukuran komputasi saat ini untuk meminta penghitungan alur gulir (gh-3589)
			val
		)
	) + "px";
}

jQuery.perpanjang( {

	// Tambahkan kait properti gaya untuk mengganti default
	// perilaku mendapatkan dan menyetel properti gaya
	cssHook: {
		opacity: {
			dapatkan: fungsi( elemen, dihitung ) {
				jika ( dihitung ) {

					// Kita harus selalu mendapatkan nomor kembali dari opacity
					var ret = curCSS( elemen, "opasitas" );
					kembali ret === "" ? "1": mundur;
				}
			}
		}
	},

	// Jangan menambahkan "px" secara otomatis ke properti yang mungkin tidak memiliki unit ini
	Nomor css: {
		animationIterationCount: benar,
		Rasio aspek: benar,
		borderImageSlice: benar,
		kolomHitungan: benar,
		flexGrow: benar,
		flexShrink: benar,
		fontWeight: benar,
		area grid: benar,
		gridColumn: benar,
		gridColumnEnd: benar,
		gridColumnStart: benar,
		gridRow: benar,
		gridRowEnd: benar,
		gridRowStart: benar,
		lineHeight: benar,
		opacity: benar,
		urutan: benar,
		anak yatim: benar,
		skala: benar,
		janda: benar,
		zIndeks: benar,
		perbesar: benar,

		// terkait SVG
		isiOpacity: benar,
		banjirOpacity: benar,
		stopOpacity: benar,
		strokeMiterlimit: benar,
		strokeOpacity: benar
	},

	// Tambahkan properti yang namanya ingin Anda perbaiki sebelumnya
	// mengatur atau mendapatkan nilainya
	cssProps: {},

	// Dapatkan dan setel properti gaya pada Node DOM
	gaya: fungsi( elemen, nama, nilai, tambahan ) {

		// Jangan atur gaya pada node teks dan komentar
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			kembali;
		}

		// Pastikan kita bekerja dengan nama yang benar
		var ret, ketik, kait,
			nama asal = camelCase( nama ),
			isCustomProp = rcustomProp.test( nama ),
			gaya = elemen.gaya;

		// Pastikan kita bekerja dengan nama yang benar. Kami tidak melakukannya
		// ingin menanyakan nilainya apakah itu adalah properti khusus CSS
		// karena ditentukan oleh pengguna.
		jika ( !isCustomProp ) {
			nama = finalPropName( nama asal );
		}

		// Mendapatkan kaitan untuk versi yang diawali, lalu versi yang tidak diawali
		kait = jQuery.cssHooks[ nama ] || jQuery.cssHooks[ Nama asal ];

		// Periksa apakah kita sedang menetapkan nilai
		jika ( nilai !== tidak terdefinisi ) {
			tipe = tipe nilai;

			// Konversikan "+=" atau "-=" ke bilangan relatif (trac-7345)
			if ( ketik === "string" && ( ret = rcssNum.exec( nilai ) ) && ret[ 1 ] ) {
				nilai = adjustCSS( elemen, nama, ret );

				// Memperbaiki bug trac-9237
				ketik = "angka";
			}

			// Pastikan nilai null dan NaN tidak disetel (trac-7116)
			jika ( nilai == null || nilai !== nilai ) {
				kembali;
			}

			// Jika nomor dimasukkan, tambahkan unitnya (kecuali untuk properti CSS tertentu)
			// Pemeriksaan isCustomProp dapat dihapus di jQuery 4.0 jika kita hanya menambahkan secara otomatis
			// "px" ke beberapa nilai hardcode.
			if ( ketik === "angka" && !isCustomProp ) {
				nilai += ulang && ulang[ 3 ] || ( jQuery.cssNumber[ Nama asal ] ? "" : "px" );
			}

			// background-* props mempengaruhi nilai klon asli
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				gaya[ nama ] = "mewarisi";
			}

			// Jika hook diberikan, gunakan nilai tersebut, jika tidak tetapkan saja nilai yang ditentukan
			if ( !hooks || !( "set" di hook ) ||
				( nilai = hooks.set( elem, nilai, ekstra ) ) !== tidak terdefinisi ) {

				jika ( isCustomProp ) {
					style.setProperty( nama, nilai );
				} kalau tidak {
					gaya[ nama ] = nilai;
				}
			}

		} kalau tidak {

			// Jika hook diberikan, dapatkan nilai yang tidak dihitung dari sana
			if ( kait && "dapatkan" di kait &&
				( ret = hooks.get( elem, false, extra ) ) !== tidak terdefinisi ) {

				kembali mundur;
			}

			// Jika tidak, ambil saja nilai dari objek gaya
			kembali gaya[ nama ];
		}
	},

	css: fungsi( elemen, nama, tambahan, gaya ) {
		var val, angka, kait,
			nama asal = camelCase( nama ),
			isCustomProp = rcustomProp.test( nama );

		// Pastikan kita bekerja dengan nama yang benar. Kami tidak melakukannya
		// ingin mengubah nilainya jika itu adalah properti khusus CSS
		// karena ditentukan oleh pengguna.
		jika ( !isCustomProp ) {
			nama = finalPropName( nama asal );
		}

		// Coba nama dengan awalan diikuti dengan nama tanpa awalan
		kait = jQuery.cssHooks[ nama ] || jQuery.cssHooks[ Nama asal ];

		// Jika hook diberikan, dapatkan nilai yang dihitung dari sana
		if ( kait && "dapatkan" di kait ) {
			val = hooks.get( elem, true, extra );
		}

		// Jika tidak, jika ada cara untuk mendapatkan nilai yang dihitung, gunakan itu
		jika ( val === tidak terdefinisi ) {
			val = curCSS( elemen, nama, gaya );
		}

		// Ubah "normal" menjadi nilai yang dihitung
		if ( val === "normal" && nama di cssNormalTransform ) {
			val = cssNormalTransform[ nama ];
		}

		// Jadikan numerik jika dipaksakan atau kualifikasi diberikan dan val terlihat numerik
		jika ( tambahan === "" || tambahan ) {
			angka = parseFloat( val );
			kembalikan ekstra === benar || isFinite (angka) ? nomor || 0 : val;
		}

		kembali val;
	}
} );

jQuery.each( [ "tinggi", "lebar" ], fungsi( _i, dimensi ) {
	jQuery.cssHooks[ dimensi ] = {
		dapatkan: fungsi( elem, dihitung, ekstra ) {
			jika ( dihitung ) {

				// Elemen tertentu dapat memiliki informasi dimensi jika kita menampilkannya secara tidak kasat mata
				// tetapi harus memiliki gaya tampilan terkini yang bermanfaat
				kembali rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Dukungan: Safari 8+
					// Kolom tabel di Safari memiliki offsetWidth bukan nol & nol
					// getBoundingClientRect().width kecuali tampilan diubah.
					// Dukungan: IE <=11 saja
					// Menjalankan getBoundingClientRect pada node yang terputus
					// di IE muncul kesalahan.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					menukar( elemen, cssShow, function() {
						kembalikan getWidthOrHeight( elemen, dimensi, ekstra );
					} ):
					getWidthOrHeight( elemen, dimensi, ekstra );
			}
		},

		set: fungsi( elemen, nilai, tambahan ) {
			var cocok,
				gaya = getStyles( elemen ),

				// Hanya baca style.position jika pengujian mempunyai kemungkinan gagal
				// untuk menghindari pemaksaan penyesuaian posisi.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					gaya.posisi === "mutlak",

				// Untuk menghindari pemaksaan penyesuaian posisi, ambil boxSizing hanya jika kita memerlukannya (gh-3991)
				boxSizingNeeded = gulirboxSizeBuggy || tambahan,
				isBorderBox = kotakSizingDibutuhkan &&
					jQuery.css( elem, "boxSizing", false, style ) === "kotak perbatasan",
				kurangi = ekstra?
					kotakModelPenyesuaian(
						elemen,
						dimensi,
						tambahan,
						adalahBorderBox,
						gaya
					) :
					0;

			// Perhitungkan dimensi kotak batas yang tidak dapat diandalkan dengan membandingkan offset* dengan perhitungan dan
			// memalsukan kotak konten untuk mendapatkan batas dan padding (gh-3699)
			jika ( isBorderBox && scrollboxSizeBuggy ) {
				kurangi -= Math.ceil(
					elemen[ "offset" + dimensi[ 0 ].toUpperCase() + dimensi.slice( 1 ) ] -
					parseFloat( gaya[ dimensi ] ) -
					boxModelAdjustment( elemen, dimensi, "batas", salah, gaya ) -
					0,5
				);
			}

			// Konversikan ke piksel jika diperlukan penyesuaian nilai
			if ( kurangi && ( cocok = rcssNum.exec( nilai ) ) &&
				( cocok dengan[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimensi ] = nilai;
				nilai = jQuery.css( elemen, dimensi );
			}

			kembalikan setPositiveNumber( elem, nilai, kurangi );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	fungsi( elemen, dihitung ) {
		jika ( dihitung ) {
			kembali ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().kiri -
					menukar( elemen, { marginLeft: 0 }, fungsi() {
						kembalikan elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// Kait ini digunakan oleh animate untuk memperluas properti
jQuery.setiap( {
	batas: "",
	bantalan: "",
	perbatasan: "Lebar"
}, fungsi( awalan, akhiran ) {
	jQuery.cssHooks[ awalan + akhiran ] = {
		perluas: fungsi( nilai ) {
			var saya = 0,
				diperluas = {},

				// Mengasumsikan satu nomor jika bukan string
				bagian = typeof value === "string" ? nilai.split( " " ) : [ nilai ];

			untuk ( ; saya < 4; saya++ ) {
				diperluas[ awalan + cssPerluas[ i ] + akhiran ] =
					bagian[ saya ] || bagian[ i - 2 ] || bagian[ 0 ];
			}

			pengembalian diperluas;
		}
	};

	if ( awalan !== "margin" ) {
		jQuery.cssHooks[ awalan + akhiran ].set = setPositiveNumber;
	}
} );

jQuery.fn.perpanjang( {
	css: fungsi( nama, nilai ) {
		akses kembali( ini, fungsi( elemen, nama, nilai ) {
			gaya var, len,
				peta = {},
				saya = 0;

			if ( Array.isArray( nama ) ) {
				gaya = getStyles( elemen );
				len = nama.panjang;

				untuk ( ; saya < len; saya++ ) {
					peta[ nama[ i ] ] = jQuery.css( elem, nama[ i ], false, gaya );
				}

				peta kembali;
			}

			nilai kembalian !== tidak terdefinisi?
				jQuery.style( elemen, nama, nilai ) :
				jQuery.css( elemen, nama );
		}, nama, nilai, argumen.panjang > 1 );
	}
} );


function Tween( elem, opsi, prop, end, easing ) {
	kembalikan Tween.prototype.init baru ( elem, options, prop, end, easing );
}
jQuery.Tween = Dua belas;

Tween.prototipe = {
	konstruktor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elemen;
		this.prop = prop;
		this.easing = pelonggaran || jQuery.pelonggaran._default;
		this.options = pilihan;
		ini.mulai = ini.sekarang = ini.cur();
		this.end = akhir;
		ini.satuan = satuan || (jquery.cssNumber[ prop ] ? "" : "px" );
	},
	saat ini: fungsi() {
		var hooks = Tween.propHooks[ this.prop ];

		kembalikan kait && kait.dapatkan ?
			hooks.dapatkan( ini ):
			Tween.propHooks._default.get( ini );
	},
	jalankan: fungsi( persen ) {
		var mereda,
			kait = Tween.propHooks[ ini.prop ];

		if ( ini.pilihan.durasi ) {
			this.pos = mereda = jQuery.easing[ this.easing ](
				persen, ini.pilihan.durasi * persen, 0, 1, ini.pilihan.durasi
			);
		} kalau tidak {
			this.pos = mereda = persen;
		}
		ini.sekarang = ( ini.akhir - ini.mulai ) * mereda + ini.mulai;

		if ( ini.pilihan.langkah ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( kait && kait.set ) {
			kait.set( ini );
		} kalau tidak {
			Tween.propHooks._default.set( ini );
		}
		kembalikan ini;
	}
};

Tween.prototype.init.prototype = Tween.prototipe;

Tween.propHooks = {
	_bawaan: {
		dapatkan: fungsi( dua belas ) {
			hasil var;

			// Menggunakan properti pada elemen secara langsung jika itu bukan elemen DOM,
			// atau ketika tidak ada properti gaya yang cocok.
			jika ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Meneruskan string kosong sebagai parameter ke-3 ke .css akan dilakukan secara otomatis
			// mencoba parseFloat dan melakukan fallback ke string jika parse gagal.
			// Nilai sederhana seperti "10px" diurai menjadi Float;
			// nilai kompleks seperti "rotate(1rad)" dikembalikan apa adanya.
			hasil = jQuery.css( tween.elem, tween.prop, "" );

			// String kosong, null, tidak terdefinisi, dan "otomatis" diubah menjadi 0.
			kembalikan !hasil || hasil === "otomatis"? 0 : hasil;
		},
		set: fungsi( dua belas ) {

			// Gunakan kait langkah untuk kompatibilitas punggung.
			// Gunakan cssHook jika ada.
			// Gunakan .style jika tersedia dan gunakan properti biasa jika tersedia.
			if ( jQuery.fx.langkah[ tween.prop ] ) {
				jQuery.fx.langkah[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} kalau tidak {
				tween.elem[ tween.prop ] = tween.sekarang;
			}
		}
	}
};

// Dukungan: IE <=9 saja
// Pendekatan berbasis panik untuk mengatur sesuatu pada node yang terputus
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: fungsi( dua belas ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.sekarang;
		}
	}
};

jQuery.pelonggaran = {
	linier: fungsi( p ) {
		kembali p;
	},
	ayunan: fungsi( p ) {
		kembali 0,5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "ayunan"
};

jQuery.fx = Tween.prototype.init;

// Kembali kompatibel <1,8 titik ekstensi
jQuery.fx.langkah = {};




var
	fxSekarang, sedang dalam proses,
	rfxtypes = /^(?:toggle|tampilkan|sembunyikan)$/,
	rrun = /queueHooks$/;

jadwal fungsi() {
	jika ( sedang berlangsung ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( jadwal );
		} kalau tidak {
			window.setTimeout( jadwal, jQuery.fx.interval );
		}

		jQuery.fx.centang();
	}
}

// Animasi yang dibuat secara sinkron akan berjalan secara sinkron
fungsi buatFxSekarang() {
	jendela.setTimeout( fungsi() {
		fxNow = tidak terdefinisi;
	} );
	kembali ( fxNow = Tanggal.sekarang() );
}

// Hasilkan parameter untuk membuat animasi standar
fungsi genFx( tipe, includeWidth ) {
	var yang mana,
		saya = 0,
		attrs = { tinggi: ketik };

	// Jika kita menyertakan lebar, nilai langkahnya adalah 1 untuk melakukan semua nilai cssExpand,
	// jika tidak, nilai langkahnya adalah 2 untuk melewati Kiri dan Kanan
	includeWidth = includeWidth ? 1 : 0;
	untuk ( ; i < 4; i += 2 - includeWidth ) {
		yang = cssPerluas[ saya ];
		attrs[ "margin" + yang ] = attrs[ "padding" + yang ] = ketik;
	}

	jika (termasuk Lebar) {
		attrs.opacity = attrs.width = ketik;
	}

	mengembalikan attr;
}

fungsi createTween( nilai, prop, animasi ) {
	var dua belas,
		koleksi = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		indeks = 0,
		panjang = koleksi.panjang;
	untuk ( ; indeks < panjang; indeks++ ) {
		if ( ( tween = koleksi[ indeks ].panggilan( animasi, prop, nilai ) ) ) {

			// Kita sudah selesai dengan properti ini
			kembali dua belas;
		}
	}
}

fungsi defaultPrefilter( elemen, props, opts ) {
	var prop, nilai, sakelar, kait, oldfire, propTween, pulihkanTampilan, tampilan,
		isBox = "lebar" pada props || "tinggi" dalam alat peraga,
		animasi = ini,
		asal = {},
		gaya = elemen.gaya,
		tersembunyi = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Animasi melewatkan antrian membajak fx hooks
	if ( !opts.queue ) {
		kait = jQuery._queueHooks( elemen, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.kosong.api;
			hooks.kosong.api = fungsi() {
				if ( !hooks.unqueued ) {
					api tua();
				}
			};
		}
		hooks.unqueued++;

		animasi.selalu( fungsi() {

			// Pastikan pengendali lengkap dipanggil sebelum ini selesai
			animasi.selalu( fungsi() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).panjang ) {
					hooks.kosong.api();
				}
			} );
		} );
	}

	// Deteksi tampilkan/sembunyikan animasi
	untuk ( penyangga dalam alat peraga ) {
		nilai = alat peraga[ alat peraga ];
		if ( rfxtypes.test( nilai ) ) {
			hapus alat peraga[ alat peraga ];
			beralih = beralih || nilai === "beralih";
			if ( nilai === ( tersembunyi ? "hai de" : "tampilkan" ) ) {

				// Berpura-pura disembunyikan jika ini adalah "pertunjukan" dan
				// masih ada data dari show/hide yang dihentikan
				if ( nilai === "tampilkan" && dataShow && dataShow[ prop ] !== tidak terdefinisi ) {
					tersembunyi = benar;

				// Abaikan semua data tampilkan/sembunyikan tanpa operasi lainnya
				} kalau tidak {
					melanjutkan;
				}
			}
			asal[ prop ] = pertunjukan data && pertunjukan data[ prop ] || jQuery.gaya( elemen, penyangga );
		}
	}

	// Bail out jika ini adalah larangan seperti .hide().hide()
	propTween = !jQuery.isEmptyObject( alat peraga );
	jika ( !propTween && jQuery.isEmptyObject( asal ) ) {
		kembali;
	}

	// Batasi gaya "overflow" dan "display" selama animasi kotak
	jika ( isBox && elem.nodeType === 1 ) {

		// Dukungan: YAITU <=9 - 11, Tepi 12 - 15
		// Catat ketiga atribut overflow karena IE tidak menyimpulkan singkatannya
		// dari overflowX dan overflowY dan Edge yang bernilai sama hanya mencerminkan
		// nilai overflowX di sana.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identifikasi jenis tampilan, lebih memilih tampilkan/sembunyikan data lama daripada kaskade CSS
		mengembalikanDisplay = dataShow && dataShow.display;
		jika ( mengembalikanTampilan == null ) {
			memulihkanDisplay = dataPriv.get( elem, "tampilan" );
		}
		tampilan = jQuery.css( elem, "tampilan" );
		jika ( tampilan === "tidak ada" ) {
			jika ( mengembalikanTampilan ) {
				tampilan = pulihkanTampilan;
			} kalau tidak {

				// Dapatkan nilai yang tidak kosong dengan memaksakan visibilitas untuk sementara
				showHide( [ elemen ], benar );
				pulihkanDisplay = elemen.style.display || memulihkanTampilan;
				tampilan = jQuery.css( elem, "tampilan" );
				showHide( [ elemen ] );
			}
		}

		// Menganimasikan elemen sebaris sebagai blok sebaris
		if ( display === "inline" || display === "inline-block" && mengembalikanDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Mengembalikan nilai tampilan asli di akhir animasi tampilkan/sembunyikan murni
				jika ( !propTween ) {
					anim.selesai( fungsi() {
						style.display = mengembalikanTampilan;
					} );
					jika ( mengembalikanTampilan == null ) {
						tampilan = gaya.tampilan;
						pulihkanTampilan = tampilan === "tidak ada"? "" : menampilkan;
					}
				}
				style.display = "blok sebaris";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "tersembunyi";
		animasi.selalu( fungsi() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			gaya.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Menerapkan animasi tampilkan/sembunyikan
	propTween = salah;
	untuk ( prop di asal ) {

		// Pengaturan umum tampilkan/sembunyikan untuk animasi elemen ini
		jika ( !propTween ) {
			jika ( pertunjukan data ) {
				if ("tersembunyi" di dataShow ) {
					tersembunyi = dataShow.hidden;
				}
			} kalau tidak {
				dataShow = dataPriv.access( elem, "fxshow", { tampilan: mengembalikanTampilan } );
			}

			// Simpan tersembunyi/terlihat untuk beralih jadi `.stop().toggle()` "terbalik"
			jika ( alihkan ) {
				dataShow.hidden = !tersembunyi;
			}

			// Tampilkan elemen sebelum menganimasikannya
			jika ( tersembunyi ) {
				showHide( [ elemen ], benar );
			}

			/* eslint-nonaktifkan fungsi tanpa loop */

			anim.selesai( fungsi() {

				/* eslint-aktifkan fungsi tanpa loop */

				// Langkah terakhir dari animasi "sembunyikan" sebenarnya adalah menyembunyikan elemen
				jika ( !tersembunyi ) {
					showHide( [ elemen ] );
				}
				dataPriv.remove( elem, "fxshow" );
				untuk ( prop di asal ) {
					jQuery.gaya( elemen, prop, asal[ prop ] );
				}
			} );
		}

		// Penyiapan per properti
		propTween = createTween( tersembunyi ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop di dataShow ) ) {
			dataShow[ prop ] = propTween.mulai;
			jika ( tersembunyi ) {
				propTween.end = propTween.mulai;
				propTween.mulai = 0;
			}
		}
	}
}

fungsi propFilter( alat peraga, pelonggaran khusus ) {
	indeks var, nama, pelonggaran, nilai, kait;

	// camelCase, specialEasing dan perluas pass cssHook
	untuk ( indeks dalam alat peraga ) {
		nama = camelCase( indeks );
		pelonggaran = specialEasing[ nama ];
		nilai = alat peraga[ indeks ];
		if ( Array.isArray( nilai ) ) {
			pelonggaran = nilai[ 1 ];
			nilai = alat peraga[ indeks ] = nilai[ 0 ];
		}

		jika ( indeks !== nama ) {
			alat peraga[ nama ] = nilai;
			hapus alat peraga[ indeks ];
		}

		kait = jQuery.cssHooks[ nama ];
		if ( kait && "perluas" di kait ) {
			nilai = kait.perluas( nilai );
			hapus alat peraga[ nama ];

			// Kurang tepat $.extend, ini tidak akan menimpa kunci yang sudah ada.
			// Menggunakan kembali 'indeks' karena kita mempunyai "nama" yang benar
			untuk ( indeks dalam nilai ) {
				if ( !( indeks dalam alat peraga ) ) {
					alat peraga[ indeks ] = nilai[ indeks ];
					specialEasing[ indeks ] = pelonggaran;
				}
			}
		} kalau tidak {
			specialEasing[ nama ] = pelonggaran;
		}
	}
}

fungsi Animasi( elemen, properti, opsi ) {
	hasil var,
		berhenti,
		indeks = 0,
		panjang = Animasi.prefilters.panjang,
		ditangguhkan = jQuery.Ditangguhkan().selalu( function() {

			// Jangan cocokkan elemen di pemilih :animated
			hapus centang.elem;
		} ),
		centang = fungsi() {
			jika (berhenti) {
				kembali salah;
			}
			var Waktu Saat Ini = fxSekarang || buatFxSekarang(),
				tersisa = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Dukungan: Android 2.3 saja
				// Bug kerusakan kuno tidak mengizinkan kita menggunakan `1 - ( 0.5 || 0 )` (trac-12497)
				temp = sisa / animasi.durasi || 0,
				persen = 1 - suhu,
				indeks = 0,
				panjang = animasi.tweens.length;

			untuk ( ; indeks < panjang; indeks++ ) {
				animasi.tweens[ indeks ].run( persen );
			}

			deferred.notifyWith( elem, [ animasi, persen, sisa ] );

			// Jika masih ada yang harus dilakukan, menyerahlah
			if ( persen < 1 && panjang ) {
				pengembalian yang tersisa;
			}

			// Jika ini adalah animasi kosong, sintesiskan pemberitahuan kemajuan akhir
			jika ( !panjang ) {
				ditangguhkan.notifyWith( elem, [ animasi, 1, 0 ] );
			}

			// Selesaikan animasi dan laporkan kesimpulannya
			deferred.resolveWith( elem, [ animasi ] );
			kembali salah;
		},
		animasi = ditangguhkan.janji( {
			elemen: elemen,
			alat peraga: jQuery.extend( {}, properti ),
			pilihan: jQuery.extend( benar, {
				pelonggaran khusus: {},
				pelonggaran: jQuery.easing._default
			}, pilihan ),
			properti asli: properti,
			opsi asli: opsi,
			Waktu mulai: fxNow || buatFxSekarang(),
			durasi: opsi.durasi,
			remaja: [],
			createTween: fungsi( penyangga, akhir ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animasi.opts.specialEasing[ prop ] || animasi.opts.easing );
				animasi.tweens.push( tween );
				kembali dua belas;
			},
			berhenti: fungsi( gotoEnd ) {
				indeks var = 0,

					// Jika kita ingin mencapai akhir, kita ingin menjalankan semua remaja
					// jika tidak, kita lewati bagian ini
					panjang = gotoEnd ? animasi.remaja.panjang : 0;
				jika (berhenti) {
					kembalikan ini;
				}
				berhenti = benar;
				untuk ( ; indeks < panjang; indeks++ ) {
					animasi.remaja[ indeks ].jalankan( 1 );
				}

				// Putuskan kapan kita memainkan frame terakhir; jika tidak, tolak
				jika ( gotoEnd ) {
					ditangguhkan.notifyWith( elem, [ animasi, 1, 0 ] );
					deferred.resolveWith( elem, [ animasi, gotoEnd ] );
				} kalau tidak {
					deferred.rejectWith( elem, [ animasi, gotoEnd ] );
				}
				kembalikan ini;
			}
		} ),
		props = animasi.props;

	propFilter( props, animation.opts.specialEasing );

	untuk ( ; indeks < panjang; indeks++ ) {
		hasil = Animasi.prefilters[ indeks ].panggilan( animasi, elemen, alat peraga, animasi.opts );
		jika ( hasil ) {
			if ( isFunction( hasil.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					hasil.stop.bind( hasil );
			}
			hasil pengembalian;
		}
	}

	jQuery.map( alat peraga, createTween, animasi );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animasi );
	}

	// Lampirkan callback dari opsi
	animasi
		.kemajuan( animasi.opts.kemajuan )
		.selesai( animasi.opts.done, animasi.opts.lengkap )
		.fail( animasi.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( centang, {
			elemen: elemen,
			animasi: animasi,
			antrian: animation.opts.queue
		} )
	);

	kembali animasi;
}

jQuery.Animasi = jQuery.extend( Animasi, {

	remaja: {
		"*": [ fungsi( penyangga, nilai ) {
			var tween = ini.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( nilai ), tween );
			kembali dua belas;
		} ]
	},

	tweener: fungsi( alat peraga, panggilan balik ) {
		jika ( isFunction( alat peraga ) ) {
			panggilan balik = alat peraga;
			alat peraga = [ "*" ];
		} kalau tidak {
			props = props.match( rnothtmlputih );
		}

		var prop,
			indeks = 0,
			panjang = alat peraga.panjang;

		untuk ( ; indeks < panjang; indeks++ ) {
			prop = alat peraga[ indeks ];
			Animasi.tweeners[ prop ] = Animasi.tweeners[ prop ] || [];
			Animasi.tweeners[ prop ].unshift( callback );
		}
	},

	prafilter: [ defaultPrefilter ],

	prafilter: fungsi( panggilan balik, tambahkan ) {
		jika ( tambahkan ) {
			Animasi.prefilters.unshift( panggilan balik );
		} kalau tidak {
			Animasi.prefilters.push( panggilan balik );
		}
	}
} );

jQuery.speed = fungsi( kecepatan, pelonggaran, fn ) {
	var opt = kecepatan && typeof speed === "objek" ? jQuery.extend( {}, kecepatan ) : {
		lengkap: fn || !fn && pelonggaran ||
			isFunction( kecepatan ) && kecepatan,
		durasi: kecepatan,
		pelonggaran: fn && pelonggaran || pelonggaran && !isFunction( pelonggaran ) && pelonggaran
	};

	// Pergi ke keadaan akhir jika fx tidak aktif
	jika (jquery.fx.off) {
		opt.durasi = 0;

	} kalau tidak {
		if ( typeof opt.duration !== "angka" ) {
			if ( opt.duration di jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} kalau tidak {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalisasikan opt.queue - true/tidak terdefinisi/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.antrian = "fx";
	}

	// Mengantri
	opt.old = opt.lengkap;

	opt.lengkap = fungsi() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( ini );
		}

		if ( opt.antrian ) {
			jQuery.dequeue( ini, opt.queue );
		}
	};

	pilihan kembali;
};

jQuery.fn.perpanjang( {
	fadeTo: fungsi( kecepatan, ke, pelonggaran, panggilan balik ) {

		// Tampilkan elemen tersembunyi apa pun setelah mengatur opacity ke 0
		kembalikan ini.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animasikan sesuai nilai yang ditentukan
			.end().animate( { opacity: ke }, kecepatan, pelonggaran, panggilan balik );
	},
	menghidupkan: fungsi( prop, kecepatan, pelonggaran, panggilan balik ) {
		var kosong = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( kecepatan, pelonggaran, panggilan balik),
			doAnimasi = fungsi() {

				// Beroperasi pada salinan prop sehingga pelonggaran per properti tidak akan hilang
				var anim = Animasi( ini, jQuery.extend( {}, prop ), optall );

				// Animasi kosong, atau penyelesaian segera diselesaikan
				if ( kosong || dataPriv.get( ini, "selesai" ) ) {
					animasi.stop( benar );
				}
			};

		doAnimation.finish = doAnimation;

		kembali kosong || optall.antrian === salah ?
			ini.setiap( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	berhenti: fungsi( ketik, clearQueue, gotoEnd ) {
		var stopQueue = fungsi( kait ) {
			var stop = hooks.stop;
			hapus hooks.stop;
			berhenti( gotoEnd );
		};

		if ( tipe tipe !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = ketik;
			ketik = tidak terdefinisi;
		}
		if ( hapus Antrean ) {
			this.antrian( ketik || "fx", [] );
		}

		kembalikan ini.setiap( fungsi() {
			var dequeue = benar,
				indeks = ketik != null && ketik + "kait antrian",
				pengatur waktu = jQuery.pengatur waktu,
				data = dataPriv.get( ini );

			jika ( indeks ) {
				jika ( data[ indeks ] && data[ indeks ].stop ) {
					stopQueue( data[ indeks ] );
				}
			} kalau tidak {
				untuk ( indeks dalam data ) {
					if ( data[ indeks ] && data[ indeks ].stop && rrun.test( indeks ) ) {
						stopQueue( data[ indeks ] );
					}
				}
			}

			untuk ( indeks = pengatur waktu.panjang; indeks--; ) {
				if ( pengatur waktu[ indeks ].elem === ini &&
					( ketik == null || pengatur waktu[ indeks ].antrian === ketik ) ) {

					pengatur waktu[ indeks ].anim.stop( gotoEnd );
					dequeue = salah;
					timers.splice( indeks, 1 );
				}
			}

			// Memulai langkah berikutnya dalam antrian jika langkah terakhir tidak dipaksakan.
			// Timer saat ini akan memanggil callback lengkapnya, yang mana
			// akan melakukan dequeue tetapi hanya jika mereka berada di gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( ini, ketik );
			}
		} );
	},
	selesai: fungsi( mengetik ) {
		jika ( mengetik !== salah ) {
			mengetik = mengetik || "fx";
		}
		kembalikan ini.setiap( fungsi() {
			indeks var,
				data = dataPriv.get( ini ),
				antrian = data[ ketik + "antrian" ],
				kait = data[ ketik + "kait antrian" ],
				pengatur waktu = jQuery.pengatur waktu,
				panjang = antrian ? antrian.panjang : 0;

			// Aktifkan tanda akhir pada data pribadi
			data.selesai = benar;

			// Kosongkan antrian terlebih dahulu
			jQuery.antrian( ini, ketik, [] );

			if ( kait && kait.stop ) {
				hooks.stop.call( ini, benar );
			}

			// Carilah animasi yang aktif, dan selesaikan
			untuk ( indeks = pengatur waktu.panjang; indeks--; ) {
				if ( pengatur waktu[ indeks ].elem === ini && pengatur waktu[ indeks ].antrian === ketik ) {
					pengatur waktu[ indeks ].anim.stop( benar );
					timers.splice( indeks, 1 );
				}
			}

			// Cari animasi apa pun di antrian lama dan selesaikan
			untuk ( indeks = 0; indeks < panjang; indeks++ ) {
				if ( antrian[ indeks ] && antrian[ indeks ].finish ) {
					antrian[ indeks ].finish.panggilan( ini );
				}
			}

			// Matikan bendera akhir
			hapus data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, nama ) {
	var cssFn = jQuery.fn[ nama ];
	jQuery.fn[ nama ] = fungsi( kecepatan, pelonggaran, panggilan balik ) {
		kecepatan kembali == null || kecepatan typeof === "boolean"?
			cssFn.apply( ini, argumen ):
			this.animate( genFx( name, true ), kecepatan, easing, callback );
	};
} );

// Hasilkan pintasan untuk animasi khusus
jQuery.setiap( {
	geser ke bawah: genFx( "tampilkan" ),
	slideUp: genFx( "sembunyikan" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opasitas: "tampilkan" },
	fadeOut: { opasitas: "sembunyikan" },
	fadeToggle: { opacity: "toggle" }
}, fungsi( nama, alat peraga ) {
	jQuery.fn[ nama ] = fungsi( kecepatan, pelonggaran, panggilan balik ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timer = [];
jQuery.fx.centang = fungsi() {
	pengatur waktu var,
		saya = 0,
		pengatur waktu = jQuery.pengatur waktu;

	fxNow = Tanggal.sekarang();

	for ( ; i < timers.length; i++ ) {
		pengatur waktu = pengatur waktu[ saya ];

		// Jalankan pengatur waktu dan hapus dengan aman setelah selesai (memungkinkan penghapusan eksternal)
		if ( !timer() && timer[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = tidak terdefinisi;
};

jQuery.fx.timer = fungsi( pengatur waktu ) {
	jQuery.timer.push( pengatur waktu );
	jQuery.fx.mulai();
};

jQuery.fx.interval = 13;
jQuery.fx.mulai = fungsi() {
	jika ( sedang berlangsung ) {
		kembali;
	}

	sedang berlangsung = benar;
	jadwal();
};

jQuery.fx.stop = fungsi() {
	sedang berlangsung = null;
};

jQuery.fx.kecepatan = {
	lambat: 600,
	cepat: 200,

	// Kecepatan bawaan
	_standar: 400
};


// Didasarkan pada plugin oleh Clint Helfers, dengan izin.
jQuery.fn.delay = fungsi( waktu, ketik ) {
	waktu = jQuery.fx ? jQuery.fx.kecepatan[ waktu ] || waktu : waktu;
	mengetik = mengetik || "fx";

	kembalikan ini.antrean( tipe, fungsi( selanjutnya, kait ) {
		var timeout = window.setTimeout( berikutnya, waktu );
		kait.stop = fungsi() {
			window.clearTimeout( batas waktu );
		};
	} );
};


( fungsi() {
	var masukan = dokumen.createElement( "input" ),
		pilih = document.createElement( "pilih" ),
		opt = pilih.appendChild( document.createElement( "pilihan" ) );

	input.type = "kotak centang";

	// Dukungan: Android <=4.3 saja
	// Nilai default untuk kotak centang harus "aktif"
	support.checkOn = masukan.nilai !== "";

	// Dukungan: IE <=11 saja
	// Harus mengakses Indeks yang dipilih untuk memilih opsi default
	support.optSelected = opt.selected;

	// Dukungan: IE <=11 saja
	// Sebuah input kehilangan nilainya setelah menjadi radio
	masukan = dokumen.createElement( "masukan" );
	masukan.nilai = "t";
	masukan.type = "radio";
	support.radioValue = masukan.nilai === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.perpanjang( {
	attr: fungsi( nama, nilai ) {
		akses kembali (ini, jQuery.attr, nama, nilai, argumen.panjang > 1 );
	},

	hapusAttr: fungsi( nama ) {
		kembalikan ini.setiap( fungsi() {
			jQuery.removeAttr( ini, nama );
		} );
	}
} );

jQuery.perpanjang( {
	attr: fungsi( elemen, nama, nilai ) {
		var ret, kait,
			nType = elem.nodeType;

		// Jangan mengambil/mengatur atribut pada node teks, komentar, dan atribut
		jika ( nJenis === 3 || nJenis === 8 || nJenis === 2 ) {
			kembali;
		}

		// Penggantian ke prop ketika atribut tidak didukung
		if ( typeof elem.getAttribute === "tidak terdefinisi" ) {
			kembalikan jQuery.prop( elemen, nama, nilai );
		}

		// Kait atribut ditentukan oleh versi huruf kecil
		// Ambil kait yang diperlukan jika sudah ditentukan
		jika ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			kait = jQuery.attrHooks[ nama.toLowerCase() ] ||
				(jquery.expr.match.bool.test( nama ) ? boolHook : tidak terdefinisi );
		}

		jika ( nilai !== tidak terdefinisi ) {
			jika ( nilai === nol ) {
				jQuery.removeAttr( elemen, nama );
				kembali;
			}

			if ( kait && "atur" di kait &&
				( ret = hooks.set( elemen, nilai, nama ) ) !== tidak terdefinisi ) {
				kembali mundur;
			}

			elem.setAttribute( nama, nilai + "" );
			nilai kembalian;
		}

		if ( kait && "dapatkan" di kait && ( ret = hooks.get( elem, nama ) ) !== null ) {
			kembali mundur;
		}

		ret = jQuery.find.attr( elemen, nama );

		// Atribut yang tidak ada mengembalikan null, kami normalisasi menjadi tidak terdefinisi
		kembali ret == null ? tidak terdefinisi : mundur;
	},

	kait attr: {
		jenis: {
			set: fungsi( elemen, nilai ) {
				jika ( !support.radioValue && nilai === "radio" &&
					namanode( elemen, "masukan" ) ) {
					var val = elemen.nilai;
					elem.setAttribute("tipe",nilai );
					jika ( val ) {
						elemen.nilai = val;
					}
					nilai kembalian;
				}
			}
		}
	},

	hapusAttr: fungsi( elemen, nilai ) {
		nama var,
			saya = 0,

			// Nama atribut boleh berisi karakter spasi non-HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = nilai && nilai.cocok( rnothtmlputih );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( nama = attrNames[ i++ ] ) ) {
				elem.removeAttribute( nama );
			}
		}
	}
} );

// Kait untuk atribut boolean
boHook = {
	set: fungsi( elemen, nilai, nama ) {
		jika ( nilai === salah ) {

			// Hapus atribut boolean jika disetel ke false
			jQuery.removeAttr( elemen, nama );
		} kalau tidak {
			elem.setAttribute( nama, nama );
		}
		nama kembali;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, nama ) {
	var pengambil = attrHandle[ nama ] || jQuery.find.attr;

	attrHandle[ nama ] = fungsi( elemen, nama, isXML ) {
		var ret, menangani,
			nama huruf kecil = nama.toLowerCase();

		jika ( !isXML ) {

			// Hindari loop tak terbatas dengan menghapus sementara fungsi ini dari pengambil
			menangani = attrHandle[nama huruf kecil ];
			attrHandle[nama huruf kecil ] = ret;
			ret = pengambil( elemen, nama, isXML ) != null ?
				nama huruf kecil :
				batal;
			attrHandle[nama huruf kecil] = pegangan;
		}
		kembali mundur;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	dapat diklik = /^(?:a|area)$/i;

jQuery.fn.perpanjang( {
	penyangga: fungsi( nama, nilai ) {
		akses kembali (ini, jQuery.prop, nama, nilai, argumen.panjang > 1 );
	},

	hapusProp: fungsi( nama ) {
		kembalikan ini.setiap( fungsi() {
			hapus ini[ jQuery.propFix[ nama ] || nama ];
		} );
	}
} );

jQuery.perpanjang( {
	prop: fungsi( elemen, nama, nilai ) {
		var ret, kait,
			nType = elem.nodeType;

		// Jangan mengambil/mengatur properti pada node teks, komentar, dan atribut
		jika ( nJenis === 3 || nJenis === 8 || nJenis === 2 ) {
			kembali;
		}

		jika ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Perbaiki nama dan pasang pengait
			nama = jQuery.propFix[ nama ] || nama;
			kait = jQuery.propHooks[ nama ];
		}

		jika ( nilai !== tidak terdefinisi ) {
			if ( kait && "atur" di kait &&
				( ret = hooks.set( elemen, nilai, nama ) ) !== tidak terdefinisi ) {
				kembali mundur;
			}

			kembali ( elemen[ nama ] = nilai );
		}

		if ( kait && "dapatkan" di kait && ( ret = hooks.get( elem, nama ) ) !== null ) {
			kembali mundur;
		}

		kembalikan elemen[ nama ];
	},

	propHook: {
		tabIndeks: {
			dapatkan: fungsi( elemen ) {

				// Dukungan: IE <=9 - 11 saja
				// elem.tabIndex tidak selalu mengembalikan
				// nilai yang benar jika belum ditetapkan secara eksplisit
				// Gunakan pengambilan atribut yang tepat (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				jika ( tabindex ) {
					kembalikan parseInt( tabindex, 10 );
				}

				jika (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elemen.href
				) {
					kembali 0;
				}

				kembali -1;
			}
		}
	},

	perbaikan prop: {
		"untuk": "htmlUntuk",
		"kelas": "Namakelas"
	}
} );

// Dukungan: IE <=11 saja
// Mengakses properti SelectIndex
// memaksa browser untuk mengikuti pengaturan yang dipilih
// pada opsi
// Pengambil memastikan opsi default dipilih
// saat berada di optgroup
// aturan eslint "tidak ada ekspresi yang tidak digunakan" dinonaktifkan untuk kode ini
// karena menganggap aksesi tersebut noop
jika ( !support.optSelected ) {
	jQuery.propHooks.dipilih = {
		dapatkan: fungsi( elemen ) {

			/* eslint tanpa ekspresi yang tidak digunakan: "mati" */

			var induk = elem.parentNode;
			if ( induk && induk.parentNode ) {
				induk.parentNode.selectedIndex;
			}
			kembalikan nol;
		},
		set: fungsi( elemen ) {

			/* eslint tanpa ekspresi yang tidak digunakan: "mati" */

			var induk = elem.parentNode;
			jika (orang tua) {
				induk.selectedIndex;

				if ( induk.parentNode ) {
					induk.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.setiap( [
	"tabIndeks",
	"Hanya baca",
	"panjang maksimal",
	"spasi sel",
	"Padding sel",
	"rentang baris",
	"colSpan",
	"gunakan Peta",
	"batas bingkai",
	"konten dapat diedit"
], fungsi() {
	jQuery.propFix[ ini.toLowerCase() ] = ini;
} );




	// Hapus dan ciutkan spasi sesuai dengan spesifikasi HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	fungsi stripAndCollapse( nilai ) {
		var token = nilai.pertandingan( rnothtmlputih ) || [];
		return token.join( " " );
	}


fungsi getClass( elemen ) {
	kembalikan elem.getAttribute && elem.getAttribute( "kelas" ) || "";
}

fungsi kelasToArray( nilai ) {
	if ( Array.isArray( nilai ) ) {
		nilai kembalian;
	}
	if ( jenis nilai === "string" ) {
		mengembalikan nilai.cocok( rnothtmlputih ) || [];
	}
	kembali [];
}

jQuery.fn.perpanjang( {
	addClass: fungsi( nilai ) {
		var classNames, saat ini, curValue, className, i, finalValue;

		jika ( isFunction( nilai ) ) {
			kembalikan ini.setiap( fungsi( j ) {
				jQuery( ini ).addClass( nilai.panggilan( ini, j, getClass( ini ) ) );
			} );
		}

		classNames = classToArray( nilai );

		if ( nama kelas.panjang ) {
			kembalikan ini.setiap( fungsi() {
				curValue = getClass( ini );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				jika ( saat ini ) {
					untuk ( i = 0; i < classNames.length; i++ ) {
						namakelas = Namakelas[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							skr += Namakelas + " ";
						}
					}

					// Hanya tetapkan jika berbeda untuk menghindari rendering yang tidak diperlukan.
					finalValue = stripAndCollapse( saat ini );
					jika ( CurValue !== finalValue ) {
						this.setAttribute( "kelas",finalValue );
					}
				}
			} );
		}

		kembalikan ini;
	},

	hapusKelas: fungsi( nilai ) {
		var classNames, saat ini, curValue, className, i, finalValue;

		jika ( isFunction( nilai ) ) {
			kembalikan ini.setiap( fungsi( j ) {
				jQuery( ini ).removeClass( nilai.panggilan( ini, j, getClass( ini ) ) );
			} );
		}

		if ( !arguments.length ) {
			kembalikan ini.attr( "kelas", "" );
		}

		classNames = classToArray( nilai );

		if ( nama kelas.panjang ) {
			kembalikan ini.setiap( fungsi() {
				curValue = getClass( ini );

				// Ekspresi ini ada di sini untuk kompresibilitas yang lebih baik (lihat addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				jika ( saat ini ) {
					untuk ( i = 0; i < classNames.length; i++ ) {
						namakelas = Namakelas[ i ];

						// Hapus *semua* instance
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + namakelas + " ", " " );
						}
					}

					// Hanya tetapkan jika berbeda untuk menghindari rendering yang tidak diperlukan.
					finalValue = stripAndCollapse( saat ini );
					jika ( CurValue !== finalValue ) {
						this.setAttribute( "kelas",finalValue );
					}
				}
			} );
		}

		kembalikan ini;
	},

	toggleClass: fungsi( nilai, stateVal ) {
		var nama kelas, nama kelas, i, mandiri,
			tipe = tipe nilai,
			isValidValue = ketik === "string" || Array.isArray( nilai );

		jika ( isFunction( nilai ) ) {
			kembalikan ini.setiap( fungsi( i ) {
				jQuery( ini ).toggleClass(
					nilai.panggilan( ini, saya, getClass( ini ), stateVal ),
					negaraVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			kembalikan stateVal ? this.addClass( nilai ) : ini.removeClass( nilai );
		}

		classNames = classToArray( nilai );

		kembalikan ini.setiap( fungsi() {
			jika ( isValidValue ) {

				// Alihkan nama kelas individual
				diri = jQuery( ini );

				untuk ( i = 0; i < classNames.length; i++ ) {
					namakelas = Namakelas[ i ];

					// Periksa setiap nama kelas yang diberikan, daftar dipisahkan spasi
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} kalau tidak {
						mandiri.addClass( className );
					}
				}

			// Alihkan seluruh nama kelas
			} else if ( nilai === tidak terdefinisi || ketik === "boolean" ) {
				className = getClass( ini );
				jika (nama kelas) {

					// Simpan className jika disetel
					dataPriv.set( ini, "__className__", className );
				}

				// Jika elemen mempunyai nama kelas atau jika kita memberikan `false`,
				// lalu hapus seluruh nama kelas (jika ada, yang di atas menyimpannya).
				// Jika tidak, kembalikan apa pun yang telah disimpan sebelumnya (jika ada),
				// kembali ke string kosong jika tidak ada yang disimpan.
				if ( ini.setAttribute ) {
					this.setAttribute("kelas",
						Nama kelas || nilai === salah?
							"" :
							dataPriv.get( ini, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: fungsi( pemilih ) {
		var nama kelas, elemen,
			saya = 0;

		className = " " + pemilih + " ";
		while ( ( elemen = ini[ i++ ] ) ) {
			jika ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				kembali benar;
			}
		}

		kembali salah;
	}
} );




var rkembali = /\r/g;

jQuery.fn.perpanjang( {
	val: fungsi( nilai ) {
		var kait, ret, valueIsFunction,
			elemen = ini[ 0 ];

		if ( !arguments.length ) {
			jika ( elemen ) {
				kait = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				jika ( kait &&
					"dapatkan" di kait &&
					( ret = hooks.get( elem, "value" ) ) !== tidak terdefinisi
				) {
					kembali mundur;
				}

				ret = elemen.nilai;

				// Menangani kasus string yang paling umum
				jika ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Menangani kasus yang nilainya null/undef atau angka
				kembali ret == null ? "" : mundur;
			}

			kembali;
		}

		nilaiIsFunction = isFunction( nilai );

		kembalikan ini.setiap( fungsi( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				kembali;
			}

			jika ( nilaiIsFungsi ) {
				val = nilai.panggilan( ini, saya, jQuery( ini ).val() );
			} kalau tidak {
				val = nilai;
			}

			// Perlakukan null/tidak terdefinisi sebagai ""; mengonversi angka menjadi string
			jika ( val == nol ) {
				val = "";

			} else if ( typeof val === "angka" ) {
				val += "";

			} lain jika ( Array.isArray( val ) ) {
				val = jQuery.peta( val, fungsi( nilai ) {
					nilai kembalian == null ? "" : nilai + "";
				} );
			}

			kait = jQuery.valHooks[ tipe ini ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// Jika set kembali tidak terdefinisi, kembali ke pengaturan normal
			if ( !hooks || !( "set" di hooks ) || hooks.set( this, val, "value" ) === tidak terdefinisi ) {
				ini.nilai = val;
			}
		} );
	}
} );

jQuery.perpanjang( {
	valHook: {
		pilihan: {
			dapatkan: fungsi( elemen ) {

				var val = jQuery.find.attr( elem, "nilai" );
				kembalikan val != nol ?
					val :

					// Dukungan: YAITU <=10 - 11 saja
					// option.text memunculkan pengecualian (trac-14686, trac-14858)
					// Hapus dan ciutkan spasi
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.teks( elemen ) );
			}
		},
		Pilih: {
			dapatkan: fungsi( elemen ) {
				nilai var, opsi, i,
					pilihan = elemen.pilihan,
					indeks = elem.selectedIndex,
					one = elem.type === "pilih satu",
					nilai = satu ? batal : [],
					maks = satu? indeks + 1 : opsi.panjang;

				jika ( indeks < 0 ) {
					saya = maks;

				} kalau tidak {
					aku = satu? indeks : 0;
				}

				// Ulangi semua opsi yang dipilih
				untuk ( ; saya < maks; saya++ ) {
					pilihan = pilihan[ saya ];

					// Dukungan: IE <=9 saja
					// IE8-9 tidak memperbarui yang dipilih setelah pengaturan ulang formulir (trac-2551)
					if ( ( pilihan.dipilih || i === indeks ) &&

							// Jangan kembalikan opsi yang dinonaktifkan atau dalam optgroup yang dinonaktifkan
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Dapatkan nilai spesifik untuk opsi tersebut
						nilai = jQuery( pilihan ).val();

						// Kita tidak memerlukan array untuk satu pilihan
						jika satu ) {
							nilai kembalian;
						}

						// Multi-Pilihan mengembalikan array
						nilai.push( nilai );
					}
				}

				mengembalikan nilai;
			},

			set: fungsi( elemen, nilai ) {
				var pilihanSet, pilihan,
					pilihan = elemen.pilihan,
					nilai = jQuery.makeArray( nilai ),
					i = pilihan.panjang;

				ketika saya-- ) {
					pilihan = pilihan[ saya ];

					/* eslint-disable no-cond-assign */

					jika ( pilihan.dipilih =
						jQuery.inArray( jQuery.valHooks.option.get( opsi ), nilai ) > -1
					) {
						pilihanSet = benar;
					}

					/* eslint-aktifkan no-cond-assign */
				}

				// Memaksa browser untuk berperilaku konsisten ketika nilai yang tidak cocok ditetapkan
				jika ( !pilihanSet ) {
					elemen.selectedIndex = -1;
				}
				mengembalikan nilai;
			}
		}
	}
} );

// Pengambil/penyetel radio dan kotak centang
jQuery.each( [ "radio", "kotak centang" ], function() {
	jQuery.valHooks[ ini ] = {
		set: fungsi( elemen, nilai ) {
			if ( Array.isArray( nilai ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	jika ( !support.checkOn ) {
		jQuery.valHooks[ ini ].get = function( elem ) {
			kembalikan elem.getAttribute( "nilai" ) === null ? "aktif" : elem.value;
		};
	}
} );




// Kembalikan jQuery untuk penyertaan atribut saja
var lokasi = jendela.lokasi;

var nonce = { panduan: Tanggal.sekarang() };

var permintaan = ( /\?/ );



// Penguraian xml lintas-browser
jQuery.parseXML = fungsi( data ) {
	var xml, parserErrorElem;
	if ( !data || jenis data !== "string" ) {
		kembalikan nol;
	}

	// Dukungan: IE 9 - 11 saja
	// IE melakukan parseFromString dengan masukan yang tidak valid.
	mencoba {
		xml = ( jendela baru.DOMParser() ).parseFromString( data, "teks/xml" );
	} tangkap ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	jika ( !xml || parserErrorElem ) {
		jQuery.error("XML tidak valid: " + (
			parserErrorElem ?
				jQuery.peta( parserErrorElem.childNodes, fungsi( el ) {
					kembalikan el.textContent;
				} ).bergabung( "\n" ) :
				data
		) );
	}
	kembalikan xml;
};


var rfocusMorph = /^(?:focusinfocus|fokusoutblur)$/,
	stopPropagationCallback = fungsi( e ) {
		e.stopPropagasi();
	};

jQuery.extend( jQuery.acara, {

	pemicu: fungsi( peristiwa, data, elemen, onlyHandlers ) {

		var i, skr, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elemen || dokumen ],
			ketik = hasOwn.call( acara, "ketik" ) ? acara.type : acara,
			namespace = hasOwn.call( acara, "namespace" ) ? acara.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || dokumen;

		// Jangan melakukan event pada node teks dan komentar
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			kembali;
		}

		// fokus/buram berubah menjadi fokus masuk/keluar; pastikan kami tidak memecat mereka sekarang
		jika ( rfocusMorph.test( ketik + jQuery.event.triggered ) ) {
			kembali;
		}

		if ( mengetik.indexOf( "." ) > -1 ) {

			// Pemicu dengan spasi nama; buat regexp untuk mencocokkan jenis acara di handle()
			namespace = type.split( "." );
			ketik = namespace.shift();
			namespace.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + ketik;

		// Penelepon dapat meneruskan objek jQuery.Event, Objek, atau hanya string tipe peristiwa
		acara = acara[ jQuery.expando ] ?
			peristiwa :
			jQuery.Event baru( tipe, typeof event === "objek" && event );

		// Memicu bitmask: & 1 untuk penangan asli; & 2 untuk jQuery (selalu benar)
		acara.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespace.join( "." );
		acara.rnamespace = acara.namespace ?
			RegExp baru( "(^|\\.)" + namespace.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			batal;

		// Bersihkan acara jika acara tersebut digunakan kembali
		acara.hasil = tidak terdefinisi;
		if ( !event.target ) {
			acara.target = elemen;
		}

		// Kloning semua data yang masuk dan tambahkan event, sehingga membuat daftar argumen handler
		data = data == nol ?
			[ peristiwa ] :
			jQuery.makeArray( data, [ peristiwa ] );

		// Izinkan peristiwa khusus terjadi di luar batas
		spesial = jQuery.event.special[ ketik ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			kembali;
		}

		// Tentukan jalur propagasi event terlebih dahulu, sesuai spesifikasi event W3C (trac-9951)
		// Gelembung ke dokumen, lalu ke jendela; perhatikan ownerDocument var global (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = spesial.delegateType || jenis;
			jika ( !rfocusMorph.test( bubbleType + tipe ) ) {
				cur = cur.parentNode;
			}
			untuk ( ; saat ini; saat ini = saat ini.parentNode ) {
				eventPath.push( saat ini );
				tmp = sekarang;
			}

			// Hanya tambahkan jendela jika kita ingin mendokumentasikannya (misalnya, bukan objek biasa atau DOM terpisah)
			if ( tmp === ( elem.ownerDocument || dokumen ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || jendela );
			}
		}

		// Penangan kebakaran di jalur peristiwa
		saya = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			elemen terakhir = sekarang;
			acara.tipe = i > 1 ?
				Tipe gelembung :
				khusus.bindType || jenis;

			// pengendali jQuery
			handle = ( dataPriv.get( skr, "events" ) || Objek.buat( null ) )[ event.type ] &&
				dataPriv.get( sekarang, "pegangan" );
			jika ( menangani ) {
				handle.apply( saat ini, data );
			}

			// Pengendali asli
			menangani = ontype && cur[ ontype ];
			if ( menangani && menangani.menerapkan && menerimaData( saat ini ) ) {
				event.result = handle.apply( saat ini, data );
				if ( peristiwa.hasil === false ) {
					acara.preventDefault();
				}
			}
		}
		acara.type = tipe;

		// Jika tidak ada yang mencegah tindakan default, lakukan sekarang
		jika ( !onlyHandlers && !event.isDefaultPrevented() ) {

			jika ( ( !khusus._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				terimaData( elemen ) ) {

				// Panggil metode DOM asli pada target dengan nama yang sama dengan acaranya.
				// Jangan lakukan tindakan default di jendela, di situlah variabel global berada (trac-6170)
				if ( ontype && isFunction( elem[ ketik ] ) && !isWindow( elem ) ) {

					// Jangan memicu ulang event onFOO ketika kita memanggil metode FOO()-nya
					tmp = elemen[ ontype ];

					jika ( tmp ) {
						elemen[ ontype ] = null;
					}

					// Cegah terpicunya kembali kejadian yang sama, karena kita telah menggelembungkannya di atas
					jQuery.event.triggered = mengetik;

					jika ( acara.isPropagationStopped() ) {
						lastElement.addEventListener( ketik, stopPropagationCallback );
					}

					elemen[ ketik ]();

					jika ( acara.isPropagationStopped() ) {
						lastElement.removeEventListener( ketik, stopPropagationCallback );
					}

					jQuery.event.triggered = tidak terdefinisi;

					jika ( tmp ) {
						elemen[ ontype ] = tmp;
					}
				}
			}
		}

		return event.hasil;
	},

	// Mendukung acara donor untuk menyimulasikan acara lain
	// Hanya digunakan untuk event `fokus(masuk | keluar)`
	simulasikan: fungsi (tipe, elemen, peristiwa) {
		var e = jQuery.memperpanjang(
			jQuery.Acara baru(),
			peristiwa,
			{
				tipe: tipe,
				disimulasikan: benar
			}
		);

		jQuery.event.trigger( e, null, elemen );
	}

} );

jQuery.fn.perpanjang( {

	pemicu: fungsi( tipe, data ) {
		kembalikan ini.setiap( fungsi() {
			jQuery.event.trigger( tipe, data, ini );
		} );
	},
	triggerHandler: fungsi( tipe, data ) {
		var elemen = ini[ 0 ];
		jika ( elemen ) {
			kembalikan jQuery.event.trigger( tipe, data, elemen, true );
		}
	}
} );


var
	braket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:kirim|tombol|gambar|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

fungsi buildParams( awalan, obj, tradisional, tambahkan ) {
	nama var;

	if ( Array.isArray( obj ) ) {

		// Buat serial item array.
		jQuery.setiap( obj, fungsi( i, v ) {
			if ( tradisional || rbracket.test( awalan ) ) {

				// Perlakukan setiap item array sebagai skalar.
				tambahkan( awalan, v );

			} kalau tidak {

				// Item bukan skalar (array atau objek), kodekan indeks numeriknya.
				buildParams(
					awalan + "[" + ( typeof v === "objek" && v != null ? i : "" ) + "]",
					v,
					tradisional,
					menambahkan
				);
			}
		} );

	} else if ( !tradisional && toType( obj ) === "objek" ) {

		// Buat serial item objek.
		untuk (nama dalam objek) {
			buildParams( awalan + "[" + nama + "]", obj[ nama ], tradisional, tambahkan );
		}

	} kalau tidak {

		// Membuat serial item skalar.
		tambahkan( awalan, obj );
	}
}

// Membuat serial array elemen formulir atau sekumpulan
// kunci/nilai ke dalam string kueri
jQuery.param = fungsi( a, tradisional ) {
	awalan var,
		s = [],
		tambahkan = fungsi( kunci, valueOrFunction ) {

			// Jika nilai adalah sebuah fungsi, panggil fungsi tersebut dan gunakan nilai kembaliannya
			var nilai = isFunction( valueOrFunction ) ?
				nilaiAtauFungsi() :
				nilaiAtauFungsi;

			s[ s.length ] = encodeURIComponent( kunci ) + "=" +
				encodeURIComponent( nilai == null ? "" : nilai );
		};

	jika ( a == nol ) {
		kembali "";
	}

	// Jika sebuah array dilewatkan, asumsikan bahwa itu adalah sebuah array dengan elemen form.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Buat serial elemen formulir
		jQuery.setiap( a, fungsi() {
			tambahkan( ini.nama, ini.nilai );
		} );

	} kalau tidak {

		// Jika tradisional, enkode dengan cara "lama" (cara 1.3.2 atau lebih lama
		// berhasil), jika tidak, enkodekan params secara rekursif.
		untuk ( awalan dalam a ) {
			buildParams( awalan, a[ awalan ], tradisional, tambahkan );
		}
	}

	// Mengembalikan serialisasi yang dihasilkan
	return s.join( "&" );
};

jQuery.fn.perpanjang( {
	membuat serial: fungsi() {
		kembalikan jQuery.param( this.serializeArray() );
	},
	serializeArray: fungsi() {
		kembalikan ini.peta( fungsi() {

			// Dapat menambahkan propHook untuk "elemen" untuk memfilter atau menambahkan elemen formulir
			var elemen = jQuery.prop( ini, "elemen" );
			mengembalikan elemen? jQuery.makeArray( elemen ): ini;
		} ).filter( fungsi() {
			var tipe = ini.tipe;

			// Gunakan .is( ":disabled" ) agar fieldset[disabled] berfungsi
			kembalikan nama ini && !jQuery( ini ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( mengetik ) &&
				( ini.diperiksa || !rcheckableType.test( mengetik ) );
		} ).peta( fungsi( _i, elemen ) {
			var val = jQuery( ini ).val();

			jika ( val == nol ) {
				kembalikan nol;
			}

			if ( Array.isArray( val ) ) {
				kembalikan jQuery.peta( val, fungsi( val ) {
					return { nama: elem.nama, nilai: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { nama: elem.nama, nilai: val.replace( rCRLF, "\r\n" ) };
		} ).mendapatkan();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: deteksi protokol lokal
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoKonten = /^(?:GET|HEAD)$/,
	rprotokol = /^\/\//,

	/* Prafilter
	 * 1) Mereka berguna untuk memperkenalkan Tipe data khusus (lihat ajax/jsonp.js sebagai contoh)
	 * 2) Ini disebut:
	 * - SEBELUM meminta transportasi
	 * - SETELAH serialisasi param (s.data adalah string jika s.processData benar)
	 * 3) kuncinya adalah tipe data
	 * 4) simbol penampung semua "*" dapat digunakan
	 * 5) eksekusi akan dimulai dengan transport dataType dan KEMUDIAN berlanjut ke "*" jika diperlukan
	 */
	prafilter = {},

	/* Mengangkut binding
	 * 1) kuncinya adalah tipe data
	 * 2) simbol penampung semua "*" dapat digunakan
	 * 3) pemilihan akan dimulai dengan transport dataType dan LALU ke "*" jika diperlukan
	 */
	transportasi = {},

	// Hindari urutan karakter komentar-prolog (trac-10098); harus menenangkan serat dan menghindari kompresi
	semuaJenis = "*/".concat( "*" ),

	// Tag jangkar untuk mengurai asal dokumen
	originAnchor = dokumen.createElement( "a" );

originAnchor.href = lokasi.href;

// Basis "konstruktor" untuk jQuery.ajaxPrefilter dan jQuery.ajaxTransport
fungsi addToPrefiltersOrTransports( struktur ) {

	// dataTypeExpression bersifat opsional dan defaultnya adalah "*"
	mengembalikan fungsi( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var tipe data,
			saya = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		jika ( isFunction( fungsi ) ) {

			// Untuk setiap tipe data di dataTypeExpression
			while ( ( Tipe data = Tipe data[ i++ ] ) ) {

				// Tambahkan jika diminta
				jika ( Tipe data[ 0 ] === "+" ) {
					tipe data = tipe data.slice( 1 ) || "*";
					( struktur[ tipe data ] = struktur[ tipe data ] || [] ).unshift( func );

				// Jika tidak, tambahkan
				} kalau tidak {
					( struktur[ tipe data ] = struktur[ tipe data ] || [] ).push( func );
				}
			}
		}
	};
}

// Fungsi inspeksi dasar untuk prefilter dan transport
fungsi inspeksiPrefiltersOrTransports( struktur, opsi, originalOptions, jqXHR ) {

	var diperiksa = {},
		mencariTransportasi = ( struktur === transportasi );

	pemeriksaan fungsi( tipe data ) {
		var dipilih;
		diperiksa[ tipe data ] = benar;
		jQuery.each( struktur[ tipe data ] || [], fungsi( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( opsi, originalOptions, jqXHR );
			jika ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				pilihan.dataTypes.unshift( dataTypeOrTransport );
				periksa( dataTypeOrTransport );
				kembali salah;
			} else if ( mencariTransportasi ) {
				kembali !( dipilih = dataTypeOrTransport );
			}
		} );
		kembali dipilih;
	}

	kembalikan inspeksi( opsi.dataTypes[ 0 ] ) || !diperiksa[ "*" ] && memeriksa( "*" );
}

// Perluasan khusus untuk opsi ajax
// yang menggunakan opsi "datar" (tidak diperluas secara mendalam)
// Memperbaiki trac-9887
fungsi ajaxExtend( target, src ) {
	kunci var, dalam,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	untuk ( masukkan src ) {
		if ( src[ kunci ] !== tidak terdefinisi ) {
			( flatOptions[ kunci ] ? target : ( dalam || ( dalam = {} ) ) )[ kunci ] = src[ kunci ];
		}
	}
	jika ( dalam ) {
		jQuery.extend( benar, target, dalam );
	}

	target pengembalian;
}

/* Menangani respons terhadap permintaan ajax:
 * - menemukan tipe data yang tepat (memediasi antara tipe konten dan tipe data yang diharapkan)
 * - mengembalikan respons yang sesuai
 */
fungsi ajaxHandleResponses( s, jqXHR, tanggapan ) {

	var ct, ketik, finalDataType, firstDataType,
		isi = s.isi,
		tipe data = s.tipe data;

	// Hapus tipe data otomatis dan dapatkan tipe konten dalam prosesnya
	while ( Tipe data[ 0 ] === "*" ) {
		tipe data.shift();
		jika ( ct === tidak terdefinisi ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Jenis Konten" );
		}
	}

	// Periksa apakah kita berhadapan dengan tipe konten yang dikenal
	jika ( ct ) {
		untuk (ketikkan isinya) {
			if ( isi[ ketik ] && isi[ ketik ].test( ct ) ) {
				tipe data.unshift( mengetik );
				merusak;
			}
		}
	}

	// Periksa apakah kita mempunyai respon untuk tipe data yang diharapkan
	if ( tipe data[ 0 ] dalam tanggapan ) {
		finalDataType = Tipe data[ 0 ];
	} kalau tidak {

		// Coba Tipe data konvertibel
		untuk ( ketik tanggapan ) {
			if ( !dataTypes[ 0 ] || s.converters[ ketik + " " + dataTypes[ 0 ] ] ) {
				finalDataType = ketik;
				merusak;
			}
			jika ( !firstDataType ) {
				firstDataType = tipe;
			}
		}

		// Atau gunakan saja yang pertama
		finalDataType = finalDataType || Tipe Data pertama;
	}

	// Jika kami menemukan dataType
	// Kami menambahkan dataType ke daftar jika diperlukan
	// dan mengembalikan respons yang sesuai
	jika ( finalDataType ) {
		jika ( finalDataType !== tipe data[ 0 ] ) {
			tipe data.unshift( finalDataType );
		}
		mengembalikan tanggapan[ finalDataType ];
	}
}

/* Konversi berantai berdasarkan permintaan dan respons asli
 * Juga menyetel kolom responXXX pada instance jqXHR
 */
fungsi ajaxConvert( s, respon, jqXHR, isSuccess ) {
	var konv2, saat ini, konv, tmp, sebelumnya,
		konverter = {},

		// Bekerja dengan salinan tipe data jika kita perlu memodifikasinya untuk konversi
		tipe data = s.dataTypes.slice();

	// Buat peta konverter dengan tombol huruf kecil
	jika (Tipe data[ 1 ] ) {
		untuk ( konv di s.converters ) {
			konverter[ konv.toLowerCase() ] = s.konverter[ konv ];
		}
	}

	saat ini = dataTypes.shift();

	// Konversikan ke setiap tipe data berurutan
	sementara (saat ini) {

		if ( s.responseFields[ saat ini ] ) {
			jqXHR[ s.responseFields[ saat ini ] ] = respons;
		}

		// Terapkan dataFilter jika tersedia
		if ( !prev && isSuccess && s.dataFilter ) {
			respon = s.dataFilter( respon, s.dataType );
		}

		sebelumnya = saat ini;
		saat ini = dataTypes.shift();

		jika (saat ini) {

			// Hanya ada pekerjaan yang harus dilakukan jika tipe data saat ini non-otomatis
			jika ( saat ini === "*" ) {

				saat ini = sebelumnya;

			// Konversi respons jika tipe data sebelumnya non-otomatis dan berbeda dari saat ini
			} else if ( sebelumnya !== "*" && sebelumnya !== saat ini ) {

				// Carilah konverter langsung
				konv = konverter[ sebelumnya + " " + arus ] || konverter[ "* " + arus ];

				// Jika tidak ada yang ditemukan, carilah yang berpasangan
				jika ( !konv ) {
					untuk ( konv2 dalam konverter ) {

						// Jika konv2 mengeluarkan arus
						tmp = konv2.split( " " );
						jika ( tmp[ 1 ] === saat ini ) {

							// Jika sebelumnya dapat dikonversi ke input yang diterima
							konv = konverter[ sebelumnya + " " + tmp[ 0 ] ] ||
								konverter[ "* " + tmp[ 0 ] ];
							jika ( konv ) {

								// Padatkan konverter ekivalensi
								jika ( konv === benar ) {
									konv = konverter[ konv2 ];

								// Jika tidak, masukkan tipe data perantara
								} else if ( konverter[ konv2 ] !== benar ) {
									saat ini = tmp[ 0 ];
									tipe data.unshift( tmp[ 1 ] );
								}
								merusak;
							}
						}
					}
				}

				// Terapkan konverter (jika bukan ekivalensi)
				jika ( konv !== benar ) {

					// Kecuali jika kesalahan dibiarkan menggelembung, tangkap dan kembalikan
					if ( konv && s.throws ) {
						tanggapan = konv( tanggapan );
					} kalau tidak {
						mencoba {
							tanggapan = konv( tanggapan );
						} menangkap ( e ) {
							kembali {
								status: "kesalahan parser",
								kesalahan: konv? e : "Tidak ada konversi dari " + sebelumnya + " ke " + saat ini
							};
						}
					}
				}
			}
		}
	}

	return { status: "sukses", data: respons };
}

jQuery.perpanjang( {

	// Penghitung untuk menyimpan jumlah query yang aktif
	aktif: 0,

	// Cache header yang terakhir diubah untuk permintaan berikutnya
	terakhir diubah: {},
	tag: {},

	pengaturan ajax: {
		url: lokasi.href,
		ketik: "DAPATKAN",
		isLokal: rlocalProtocol.test( lokasi.protokol ),
		global: benar,
		data proses: benar,
		asinkron: benar,
		tipe konten: "aplikasi/x-www-form-urlencoded; charset=UTF-8",

		/*
		batas waktu: 0,
		data: batal,
		tipe data: nol,
		nama pengguna: nol,
		kata sandi: nol,
		cache: nol,
		lemparan: salah,
		tradisional: salah,
		header: {},
		*/

		menerima: {
			"*": semua jenis,
			teks: "teks/polos",
			html: "teks/html",
			xml: "aplikasi/xml, teks/xml",
			json: "aplikasi/json, teks/javascript"
		},

		isi: {
			xml: /\bxml\b/,
			html: //bhtml/,
			json: /\bjson\b/
		},

		bidang respons: {
			xml: "responXML",
			teks: "teks respon",
			json: "responJSON"
		},

		// Pengonversi data
		// Kunci memisahkan tipe sumber (atau catchall "*") dan tujuan dengan satu spasi
		konverter: {

			// Ubah apa pun menjadi teks
			"*teks": Tali,

			// Teks ke html (benar = tidak ada transformasi)
			"teks html": benar,

			// Evaluasi teks sebagai ekspresi json
			"teks json": JSON.parse,

			// Parsing teks sebagai xml
			"teks xml": jQuery.parseXML
		},

		// Untuk opsi yang tidak perlu diperluas secara mendalam:
		// Anda dapat menambahkan opsi kustom Anda sendiri di sini jika
		// dan ketika Anda membuat yang tidak seharusnya
		// sangat diperluas (lihat ajaxExtend)
		opsi datar: {
			url: benar,
			konteks: benar
		}
	},

	// Membuat objek pengaturan lengkap menjadi target
	// dengan kolom ajaxSettings dan settings.
	// Jika target dihilangkan, tulis ke ajaxSettings.
	ajaxSetup: fungsi( target, pengaturan ) {
		pengaturan pengembalian?

			// Membangun objek pengaturan
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), pengaturan ):

			// Memperluas pengaturan ajax
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prafilter ),
	ajaxTransport: addToPrefiltersOrTransports( transportasi ),

	// Metode utama
	ajax: fungsi( url, opsi ) {

		// Jika url adalah sebuah objek, simulasikan tanda tangan sebelum 1.5
		if ( typeof url === "objek" ) {
			pilihan = url;
			url = tidak terdefinisi;
		}

		// Paksa opsi menjadi objek
		pilihan = pilihan || {};

		transportasi var,

			// URL tanpa parameter anti-cache
			URL cache,

			// Header respons
			responHeaderString,
			responHeader,

			// pegangan batas waktu
			pengatur waktu habis,

			// Pembersihan url var
			urlAnchor,

			// Status permintaan (menjadi salah saat dikirim dan menjadi benar setelah selesai)
			lengkap,

			// Untuk mengetahui apakah event global akan dikirimkan
			apiGlobal,

			// Variabel lingkaran
			Saya,

			// bagian url yang tidak di-cache
			tidak di-cache,

			// Buat objek opsi akhir
			s = jQuery.ajaxSetup( {}, opsi ),

			// Konteks panggilan balik
			callbackContext = s.konteks || S,

			// Konteks untuk peristiwa global adalah callbackContext jika itu adalah node DOM atau koleksi jQuery
			globalEventContext = s.konteks &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ):
				jQuery.acara,

			// Ditunda
			ditangguhkan = jQuery.Ditangguhkan(),
			completeDeferred = jQuery.Callbacks( "sekali memori" ),

			// Callback yang bergantung pada status
			statusCode = s.statusCode || {},

			// Header (dikirim sekaligus)
			permintaanHeader = {},
			permintaanHeadersNames = {},

			// Pesan pembatalan default
			strAbort = "dibatalkan",

			// jam palsu
			jqXHR = {
				keadaan siap: 0,

				// Membuat tabel hash header jika diperlukan
				getResponseHeader: fungsi( kunci ) {
					pertandingan var;
					jika ( selesai ) {
						jika ( !responseHeaders ) {
							responHeader = {};
							while ( ( cocok = rheaders.exec( responHeadersString ) ) ) {
								responHeaders[ cocok[ 1 ].toLowerCase() + " " ] =
									( responHeaders[ cocok[ 1 ].toLowerCase() + " " ] || [] )
										.concat( cocok[ 2 ] );
							}
						}
						cocok = responHeaders[ key.toLowerCase() + " " ];
					}
					kembali cocok == null ? null : cocok.join( ", " );
				},

				// String mentah
				getAllResponseHeaders: fungsi() {
					pengembalian selesai? responHeadersString : nol;
				},

				// Menyimpan header dalam cache
				setRequestHeader: fungsi( nama, nilai ) {
					jika ( selesai == null ) {
						nama = permintaanHeadersNames[ nama.toLowerCase() ] =
							permintaanHeadersNames[ nama.toLowerCase() ] || nama;
						requestHeaders[ nama ] = nilai;
					}
					kembalikan ini;
				},

				// Mengganti header tipe konten respons
				overrideMimeType: fungsi( tipe ) {
					jika ( selesai == null ) {
						s.mimeType = mengetik;
					}
					kembalikan ini;
				},

				// Callback yang bergantung pada status
				statusCode: fungsi( peta ) {
					kode var;
					jika ( peta ) {
						jika ( selesai ) {

							// Jalankan callback yang sesuai
							jqXHR.selalu( peta[ jqXHR.status ] );
						} kalau tidak {

							// Malas menambahkan callback baru dengan cara mempertahankan callback lama
							untuk ( kode di peta ) {
								statusCode[ kode ] = [ statusCode[ kode ], peta[ kode ] ];
							}
						}
					}
					kembalikan ini;
				},

				// Batalkan permintaan
				batalkan: fungsi( statusTeks ) {
					var finalTeks = statusTeks || strBatalkan;
					jika ( mengangkut ) {
						transport.batalkan( finalText );
					}
					selesai( 0,teks akhir );
					kembalikan ini;
				}
			};

		// Lampirkan yang ditangguhkan
		ditangguhkan.janji( jqXHR );

		// Tambahkan protokol jika tidak disediakan (prefilter mungkin mengharapkannya)
		// Menangani url palsu di objek pengaturan (trac-10093: konsistensi dengan tanda tangan lama)
		// Kami juga menggunakan parameter url jika tersedia
		s.url = ( ( url || s.url || lokasi.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Opsi metode alias untuk mengetik sesuai tiket trac-12004
		s.type = opsi.metode || pilihan.tipe || s.metode || s.tipe;

		// Ekstrak daftar tipe data
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// Permintaan lintas domain dilakukan jika asal tidak cocok dengan asal saat ini.
		jika ( s.crossDomain == null ) {
			urlAnchor = dokumen.createElement( "a" );

			// Dukungan: YAITU <=8 - 11, Tepi 12 - 15
			// IE memberikan pengecualian saat mengakses properti href jika format url salah,
			// misalnya http://example.com:80x/
			mencoba {
				urlAnchor.href = s.url;

				// Dukungan: IE <=8 - 11 saja
				// Properti host jangkar tidak disetel dengan benar ketika s.url bersifat relatif
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protokol + "//" + urlAnchor.host;
			} menangkap ( e ) {

				// Jika terjadi error saat parsing URL, anggap saja itu crossDomain,
				// dapat ditolak oleh transport jika tidak valid
				s.crossDomain = benar;
			}
		}

		// Konversikan data jika belum menjadi string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.tradisional );
		}

		// Terapkan pra-filter
		inspeksiPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// Jika permintaan dibatalkan di dalam prefilter, berhenti di situ
		jika ( selesai ) {
			kembalikan jqXHR;
		}

		// Kita bisa mengadakan acara global mulai sekarang jika diminta
		// Jangan aktifkan event jika jQuery.event tidak ditentukan dalam skenario penggunaan AMD (trac-15118)
		fireGlobals = jQuery.acara && s.global;

		// Perhatikan serangkaian permintaan baru
		jika ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Huruf besar tipenya
		s.type = s.type.toUpperCase();

		// Tentukan apakah permintaan memiliki konten
		s.hasContent = !rnoContent.test( s.type );

		// Simpan URL-nya kalau-kalau kita bermain-main dengan If-Modified- Since
		// dan/atau header If-None-Match nanti
		// Hapus hash untuk menyederhanakan manipulasi url
		cacheURL = s.url.replace( rhash, "" );

		// Opsi lainnya yang menangani permintaan tanpa konten
		if ( !s.hasContent ) {

			// Ingat hashnya agar kita bisa mengembalikannya
			tidak di-cache = s.url.slice( cacheURL.length );

			// Jika data tersedia dan harus diproses, tambahkan data ke url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: menghapus data agar tidak digunakan dalam percobaan ulang
				hapus s.data;
			}

			// Tambahkan atau perbarui parameter anti-cache jika diperlukan
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				tidak di-cache = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					tidak di-cache;
			}

			// Memasang hash dan anti-cache pada URL yang akan diminta (gh-1732)
			s.url = cacheURL + tidak di-cache;

		// Ubah '%20' menjadi '+' jika ini dikodekan dari isi isi (gh-2658)
		} lain jika ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Menyetel header If-Modified- Since dan/atau If-None-Match, jika dalam mode ifModified.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "Jika-Dimodifikasi-Sejak", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "Jika-Tidak Ada yang Cocok", jQuery.etag[ cacheURL ] );
			}
		}

		// Atur header yang benar, jika data sedang dikirim
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Tipe Konten", s.contentType );
		}

		// Menyetel header Accepts untuk server, bergantung pada tipe datanya
		jqXHR.setRequestHeader(
			"Menerima",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.menerima[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.menerima[ "*" ]
		);

		// Periksa opsi header
		untuk ( saya di s.headers ) {
			jqXHR.setRequestHeader( saya, s.header[ saya ] );
		}

		// Izinkan header/mimetype khusus dan batalkan lebih awal
		if ( s.sebelumKirim &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || selesai ) ) {

			// Batalkan jika belum selesai dan kembali
			kembalikan jqXHR.abort();
		}

		// Pembatalan bukan lagi pembatalan
		strAbort = "batalkan";

		// Instal callback pada yang ditangguhkan
		completeDeferred.add( s.lengkap );
		jqXHR.selesai( s.sukses );
		jqXHR.fail( s.error );

		// Dapatkan transportasi
		transport = inspeksiPrefiltersOrTransports( transports, s, options, jqXHR );

		// Jika tidak ada transportasi, kami batalkan otomatis
		jika ( !mengangkut ) {
			selesai( -1, "Tidak Ada Transportasi" );
		} kalau tidak {
			jqXHR.readyState = 1;

			// Kirim acara global
			jika ( apiGlobal ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// Jika permintaan dibatalkan di dalam ajaxSend, berhenti di situ
			jika ( selesai ) {
				kembalikan jqXHR;
			}

			// Waktu habis
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( fungsi() {
					jqXHR.abort( "batas waktu" );
				}, s.batas waktu );
			}

			mencoba {
				selesai = salah;
				transport.send( requestHeaders, selesai );
			} menangkap ( e ) {

				// Menampilkan kembali pengecualian pasca-penyelesaian
				jika ( selesai ) {
					melempar e;
				}

				// Sebarkan yang lain sebagai hasilnya
				selesai( -1, e );
			}
		}

		// Panggilan balik ketika semuanya sudah selesai
		fungsi selesai( status, nativeStatusText, tanggapan, header ) {
			var isSuccess, sukses, kesalahan, respons, dimodifikasi,
				statusTeks = asliStatusTeks;

			// Abaikan pemanggilan berulang
			jika ( selesai ) {
				kembali;
			}

			selesai = benar;

			// Hapus batas waktu jika ada
			jika (timeoutTimer) {
				jendela.clearTimeout( timeoutTimer );
			}

			// Transportasi dereferensi untuk pengumpulan sampah awal
			// (tidak peduli berapa lama objek jqXHR akan digunakan)
			transportasi = tidak terdefinisi;

			// Cache header respons
			responHeadersString = header || "";

			// Tetapkan keadaan siap
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Tentukan apakah berhasil
			isSukses = status >= 200 && status < 300 || status === 304;

			// Dapatkan data respons
			jika ( tanggapan ) {
				respon = ajaxHandleResponses( s, jqXHR, tanggapan );
			}

			// Gunakan konverter noop untuk skrip yang hilang tetapi tidak jika jsonp
			jika ( !adalahSukses &&
				jQuery.inArray( "skrip", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "skrip teks" ] = function() {};
			}

			// Konversi apa pun yang terjadi (dengan demikian kolom responXXX selalu disetel)
			respon = ajaxConvert( s, respon, jqXHR, isSuccess );

			// Jika berhasil, tangani rangkaian tipe
			jika ( isSukses ) {

				// Menyetel header If-Modified- Since dan/atau If-None-Match, jika dalam mode ifModified.
				if ( s.ifModified ) {
					dimodifikasi = jqXHR.getResponseHeader( "Terakhir Dimodifikasi" );
					jika ( diubah ) {
						jQuery.lastModified[ cacheURL ] = diubah;
					}
					dimodifikasi = jqXHR.getResponseHeader( "etag" );
					jika ( diubah ) {
						jQuery.etag[ cacheURL ] = diubah;
					}
				}

				// jika tidak ada konten
				if ( status === 204 || s.type === "HEAD" ) {
					statusTeks = "tidak ada konten";

				// jika tidak diubah
				} lain jika ( status === 304 ) {
					statusTeks = "tidak diubah";

				// Jika kita mempunyai data, mari kita konversikan
				} kalau tidak {
					statusTeks = respon.status;
					sukses = respon.data;
					error = respon.error;
					isSukses = !kesalahan;
				}
			} kalau tidak {

				// Ekstrak kesalahan dari statusText dan normalkan untuk non-batalkan
				kesalahan = statusTeks;
				jika ( status || !statusTeks ) {
					statusTeks = "kesalahan";
					jika ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Tetapkan data untuk objek xhr palsu
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Berhasil/Kesalahan
			jika ( isSukses ) {
				deferred.resolveWith( callbackContext, [ sukses, statusTeks, jqXHR ] );
			} kalau tidak {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Callback yang bergantung pada status
			jqXHR.statusCode( statusCode );
			statusCode = tidak ditentukan;

			jika ( apiGlobal ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[jqXHR, s, apakahSukses? sukses : kesalahan ] );
			}

			// Menyelesaikan
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			jika ( apiGlobal ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Menangani penghitung AJAX global
				jika ( !( --jQuery.aktif ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		kembalikan jqXHR;
	},

	getJSON: fungsi( url, data, panggilan balik ) {
		return jQuery.get( url, data, panggilan balik, "json" );
	},

	getScript: fungsi( url, panggilan balik ) {
		return jQuery.get( url, tidak terdefinisi, panggilan balik, "skrip" );
	}
} );

jQuery.each( [ "dapatkan", "posting" ], function( _i, metode ) {
	jQuery[ metode ] = fungsi( url, data, panggilan balik, ketik ) {

		// Pergeseran argumen jika argumen data dihilangkan
		jika ( isFungsi( data ) ) {
			mengetik = mengetik || panggilan balik;
			panggilan balik = data;
			data = tidak terdefinisi;
		}

		// Url dapat berupa objek opsi (yang kemudian harus memiliki .url)
		kembalikan jQuery.ajax( jQuery.extend( {
			url: url,
			jenis: metode,
			tipe data: tipe,
			data: data,
			sukses: panggilan balik
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( fungsi( s ) {
	var saya;
	untuk ( saya di s.headers ) {
		if ( i.toLowerCase() === "tipe konten" ) {
			s.contentType = s.header[ saya ] || "";
		}
	}
} );


jQuery._evalUrl = fungsi( url, opsi, doc ) {
	kembalikan jQuery.ajax( {
		url: url,

		// Jadikan ini eksplisit, karena pengguna dapat menggantinya melalui ajaxSetup (trac-11264)
		ketik: "DAPATKAN",
		tipe data: "skrip",
		cache: benar,
		asinkron: salah,
		global: salah,

		// Hanya evaluasi respons jika berhasil (gh-4126)
		// dataFilter tidak dipanggil untuk respons kegagalan, jadi gunakan saja
		// konverter defaultnya kludgy tetapi berhasil.
		konverter: {
			"skrip teks": function() {}
		},
		filter data: fungsi( respons ) {
			jQuery.globalEval( respons, opsi, dokumen );
		}
	} );
};


jQuery.fn.perpanjang( {
	bungkusSemua: fungsi( html ) {
		bungkus var;

		jika ( ini[ 0 ] ) {
			jika ( isFunction( html ) ) {
				html = html.panggilan( ini[ 0 ] );
			}

			// Elemen untuk membungkus target
			bungkus = jQuery( html, ini[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			jika ( ini[ 0 ].parentNode ) {
				bungkus.masukkanSebelum( ini[ 0 ] );
			}

			bungkus.peta( fungsi() {
				var elemen = ini;

				sementara ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				kembalikan elemen;
			} ).tambahkan( ini );
		}

		kembalikan ini;
	},

	bungkus bagian dalam: fungsi( html ) {
		jika ( isFunction( html ) ) {
			kembalikan ini.setiap( fungsi( i ) {
				jQuery( ini ).wrapInner( html.panggilan( ini, saya ) );
			} );
		}

		kembalikan ini.setiap( fungsi() {
			var diri = jQuery( ini ),
				isi = diri.isi();

			if ( isi.panjang ) {
				isi.wrapAll( html );

			} kalau tidak {
				self.append( html );
			}
		} );
	},

	bungkus: fungsi( html ) {
		var htmlIsFunction = isFunction( html );

		kembalikan ini.setiap( fungsi( i ) {
			jQuery( ini ).wrapAll( htmlIsFunction ? html.panggilan( ini, saya ) : html );
		} );
	},

	buka bungkusnya: fungsi( pemilih ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( ini ).replaceWith( this.childNodes );
		} );
		kembalikan ini;
	}
} );


jQuery.expr.pseudos.hidden = fungsi( elemen ) {
	kembalikan !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = fungsi( elemen ) {
	kembali !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = fungsi() {
	mencoba {
		kembalikan jendela baru.XMLHttpRequest();
	} tangkap ( e ) {}
};

var xhrSuccessStatus = {

		// Protokol file selalu menghasilkan kode status 0, asumsikan 200
		0:200,

		// Dukungan: IE <=9 saja
		// trac-1450: terkadang IE mengembalikan 1223 padahal seharusnya 204
		1223: 204
	},
	xhrDidukung = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ("withCredentials" di xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( fungsi( pilihan ) {
	var panggilan balik, errorCallback;

	// Lintas domain hanya diperbolehkan jika didukung melalui XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		kembali {
			kirim: function( header, lengkap ) {
				var saya,
					xhr = opsi.xhr();

				xhr.buka(
					pilihan.tipe,
					pilihan.url,
					opsi.async,
					pilihan.nama pengguna,
					pilihan.kata sandi
				);

				// Terapkan bidang khusus jika tersedia
				if ( pilihan.xhrFields ) {
					untuk ( saya di options.xhrFields ) {
						xhr[ i ] = opsi.xhrFields[ i ];
					}
				}

				// Ganti tipe mime jika diperlukan
				jika ( pilihan.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( pilihan.mimeType );
				}

				// X-Diminta-Dengan header
				// Untuk permintaan lintas domain, kondisi untuk preflight adalah
				// mirip dengan teka-teki gambar, kami tidak pernah memastikannya.
				// (itu selalu dapat diatur berdasarkan permintaan atau bahkan menggunakan ajaxSetup)
				// Untuk permintaan domain yang sama, tidak akan mengubah header jika sudah disediakan.
				if ( !options.crossDomain && !headers[ "X-Diminta-Dengan" ] ) {
					headers[ "X-Diminta-Dengan" ] = "XMLHttpRequest";
				}

				// Tetapkan header
				untuk ( saya di header ) {
					xhr.setRequestHeader( i, header[ i ] );
				}

				// Panggilan Balik
				panggilan balik = fungsi( mengetik ) {
					fungsi kembali() {
						jika ( panggilan balik ) {
							panggilan balik = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( ketik === "batalkan" ) {
								xhr.batalkan();
							} else if ( ketik === "kesalahan" ) {

								// Dukungan: IE <=9 saja
								// Pada pembatalan asli manual , IE9 melempar
								// kesalahan pada akses properti apa pun yang bukan readyState
								if ( typeof xhr.status !== "angka" ) {
									selesai( 0, "kesalahan" );
								} kalau tidak {
									menyelesaikan(

										// File: protokol selalu menghasilkan status 0; lihat trac-8605, trac-14207
										xhr.status,
										xhr.statusTeks
									);
								}
							} kalau tidak {
								menyelesaikan(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusTeks,

									// Dukungan: IE <=9 saja
									// IE9 tidak memiliki XHR2 tetapi menggunakan biner (trac-11426)
									// Untuk XHR2 non-teks, biarkan penelepon yang menanganinya (gh-2498)
									( xhr.responseType || "teks" ) !== "teks" ||
									typeof xhr.responseText !== "string" ?
										{ biner: xhr.respons } :
										{ teks: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Dengarkan acara
				xhr.onload = panggilan balik();
				errorCallback = xhr.onerror = xhr.ontimeout = panggilan balik( "kesalahan" );

				// Dukungan: IE 9 saja
				// Gunakan onreadystatechange untuk menggantikan onabort
				// untuk menangani pembatalan yang tidak tertangkap
				if ( xhr.onabort !== tidak terdefinisi ) {
					xhr.onabort = errorCallback;
				} kalau tidak {
					xhr.onreadystatechange = fungsi() {

						// Periksa readyState sebelum batas waktu berubah
						jika ( xhr.readyState === 4 ) {

							// Izinkan onerror dipanggil terlebih dahulu,
							// tapi itu tidak akan menangani pembatalan asli
							// Juga, simpan errorCallback ke variabel
							// karena xhr.onerror tidak dapat diakses
							jendela.setTimeout( fungsi() {
								jika ( panggilan balik ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Buat panggilan balik batalkan
				panggilan balik = panggilan balik("batalkan");

				mencoba {

					// Kirimkan permintaan (ini mungkin menimbulkan pengecualian)
					xhr.kirim( pilihan.hasContent && pilihan.data || null );
				} menangkap ( e ) {

					// trac-14683: Hanya lempar ulang jika ini belum diberitahukan sebagai kesalahan
					jika ( panggilan balik ) {
						melempar e;
					}
				}
			},

			batalkan: fungsi() {
				jika ( panggilan balik ) {
					panggilan balik();
				}
			}
		};
	}
} );




// Mencegah eksekusi otomatis skrip ketika tidak ada tipe data eksplisit yang disediakan (Lihat gh-2432)
jQuery.ajaxPrefilter( fungsi( s ) {
	if ( s.crossDomain ) {
		s.isi.script = false;
	}
} );

// Instal tipe data skrip
jQuery.ajaxSetup( {
	menerima: {
		skrip: "teks/javascript, aplikasi/javascript, " +
			"aplikasi/ecmascript, aplikasi/x-ecmascript"
	},
	isi: {
		skrip: /\b(?:java|ecma)skrip\b/
	},
	konverter: {
		"skrip teks": fungsi( teks ) {
			jQuery.globalEval( teks );
			mengembalikan teks;
		}
	}
} );

// Menangani kasus khusus cache dan crossDomain
jQuery.ajaxPrefilter( "skrip", fungsi( s ) {
	if ( s.cache === tidak terdefinisi ) {
		s.cache = salah;
	}
	if ( s.crossDomain ) {
		s.type = "DAPATKAN";
	}
} );

// Mengikat transportasi hack tag skrip
jQuery.ajaxTransport( "skrip", fungsi( s ) {

	// Transportasi ini hanya menangani permintaan lintas domain atau permintaan yang dipaksakan oleh attrs
	jika ( s.crossDomain || s.scriptAttrs ) {
		skrip var, panggilan balik;
		kembali {
			kirim: fungsi( _, selesai ) {
				skrip = jQuery( "<skrip>" )
					.attr( s.scriptAttrs || {} )
					.prop( { rangkaian karakter: s.scriptCharset, src: s.url } )
					.on( "kesalahan memuat", panggilan balik = fungsi( evt ) {
						skrip.hapus();
						panggilan balik = nol;
						jika ( kejadian ) {
							lengkap( evt.type === "kesalahan" ? 404 : 200, evt.type );
						}
					} );

				// Gunakan manipulasi DOM asli untuk menghindari tipu daya domManip AJAX kami
				dokumen.head.appendChild( skrip[ 0 ] );
			},
			batalkan: fungsi() {
				jika ( panggilan balik ) {
					panggilan balik();
				}
			}
		};
	}
} );




var panggilan balik lama = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Pengaturan jsonp bawaan
jQuery.ajaxSetup( {
	jsonp: "panggilan balik",
	jsonpCallback: fungsi() {
		var panggilan balik = oldCallbacks.pop() || (jquery.expando + "_" + ( nonce.guid++ ) );
		ini[panggilan balik] = benar;
		panggilan balik kembali;
	}
} );

// Deteksi, normalkan opsi, dan instal panggilan balik untuk permintaan jsonp
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, ditimpa, respondContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url":
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "aplikasi/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Tangani jika tipe data yang diharapkan adalah "jsonp" atau kita memiliki parameter untuk disetel
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Dapatkan nama panggilan balik, dengan mengingat nilai yang sudah ada sebelumnya yang terkait dengannya
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Masukkan panggilan balik ke dalam url atau data formulir
		jika ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} lain jika ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Gunakan konverter data untuk mengambil json setelah eksekusi skrip
		s.converters[ "skrip json" ] = fungsi() {
			jika ( !responseContainer ) {
				jQuery.error( callbackName + " tidak dipanggil" );
			}
			kembalikan responContainer[ 0 ];
		};

		// Paksa tipe data json
		s.dataTypes[ 0 ] = "json";

		// Instal panggilan balik
		ditimpa = window[ callbackName ];
		jendela[ Nama panggilan balik ] = fungsi() {
			responContainer = argumen;
		};

		// Fungsi pembersihan (diaktifkan setelah konverter)
		jqXHR.selalu( fungsi() {

			// Jika nilai sebelumnya tidak ada - hapus
			if ( ditimpa === tidak terdefinisi ) {
				jQuery( jendela ).removeProp( callbackName );

			// Jika tidak, kembalikan nilai yang sudah ada sebelumnya
			} kalau tidak {
				window[ callbackName ] = ditimpa;
			}

			// Simpan kembali sebagai gratis
			jika ( s[ Nama panggilan balik ] ) {

				// Pastikan penggunaan kembali opsi tidak mengacaukan segalanya
				s.jsonpCallback = pengaturan asli.jsonpCallback;

				// Simpan nama panggilan balik untuk digunakan di masa mendatang
				oldCallbacks.push( callbackName );
			}

			// Panggil jika itu adalah sebuah fungsi dan kita mendapat respon
			if ( responContainer && isFunction( ditimpa ) ) {
				ditimpa( responContainer[ 0 ] );
			}

			responContainer = ditimpa = tidak terdefinisi;
		} );

		// Delegasikan ke skrip
		kembalikan "skrip";
	}
} );




// Dukungan: Safari 8 saja
// Di Safari 8, dokumen dibuat melalui document.implementation.createHTMLDocument
// ciutkan bentuk saudara: yang kedua menjadi anak dari yang pertama.
// Oleh karena itu, tindakan keamanan ini harus dinonaktifkan di Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( fungsi() {
	var body = dokumen.implementasi.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	kembalikan body.childNodes.length === 2;
} )();


// Argumen "data" harus berupa string html
// konteks (opsional): Jika ditentukan, fragmen akan dibuat dalam konteks ini,
// default ke dokumen
// keepScripts (opsional): Jika benar, akan menyertakan skrip yang diteruskan dalam string html
jQuery.parseHTML = fungsi( data, konteks, keepScripts ) {
	if ( jenis data !== "string" ) {
		kembali [];
	}
	if ( jenis konteks === "boolean" ) {
		keepScripts = konteks;
		konteks = salah;
	}

	var base, diurai, skrip;

	jika ( !konteks ) {

		// Menghentikan skrip atau event handler inline agar tidak segera dieksekusi
		// dengan menggunakan dokumen.implementasi
		jika ( support.createHTMLDocument ) {
			konteks = dokumen.implementasi.createHTMLDocument( "" );

			// Tetapkan href dasar untuk dokumen yang dibuat
			// jadi elemen apa pun yang diurai dengan URL
			// didasarkan pada URL dokumen (gh-2965)
			base = konteks.createElement( "base" );
			base.href = dokumen.lokasi.href;
			konteks.head.appendChild( base );
		} kalau tidak {
			konteks = dokumen;
		}
	}

	diuraikan = rsingleTag.exec( data );
	skrip = !keepScript && [];

	// Tag tunggal
	jika ( diuraikan ) {
		return [ konteks.createElement( diuraikan[ 1 ] ) ];
	}

	parsing = buildFragment( [ data ], konteks, skrip );

	if ( skrip && skrip.panjang ) {
		jQuery( skrip ).hapus();
	}

	kembalikan jQuery.merge( [], parsing.childNodes );
};


/**
 * Muat url ke dalam halaman
 */
jQuery.fn.load = fungsi( url, params, panggilan balik ) {
	pemilih var, jenis, respons,
		diri = ini,
		off = url.indexOf( " " );

	jika ( mati > -1 ) {
		pemilih = stripAndCollapse( url.slice( mati ) );
		url = url.slice( 0, mati );
	}

	// Jika itu sebuah fungsi
	jika ( isFunction( params ) ) {

		// Kami berasumsi bahwa itu adalah panggilan balik
		panggilan balik = params;
		params = tidak terdefinisi;

	// Jika tidak, buat string param
	} else if ( params && typeof params === "objek" ) {
		ketik = "POSTING";
	}

	// Jika kita mempunyai elemen untuk diubah, buatlah permintaan
	if ( panjang diri > 0 ) {
		jQuery.ajax( {
			url: url,

			// Jika variabel "type" tidak ditentukan, maka metode "GET" akan digunakan.
			// Jadikan nilai bidang ini eksplisit sejak saat itu
			// pengguna dapat menggantinya melalui metode ajaxSetup
			ketik: ketik || "MENDAPATKAN",
			tipe data: "html",
			data: param
		} ).selesai( fungsi( responTeks ) {

			// Simpan respons untuk digunakan dalam panggilan balik lengkap
			respon = argumen;

			self.html( pemilih ?

				// Jika pemilih ditentukan, cari elemen yang tepat di div tiruan
				// Kecualikan skrip untuk menghindari kesalahan IE 'Izin Ditolak'
				jQuery( "<div>" ).append( jQuery.parseHTML( responText ) ).find( pemilih ) :

				// Jika tidak, gunakan hasil lengkapnya
				responTeks );

		// Jika permintaan berhasil, fungsi ini mendapatkan "data", "status", "jqXHR"
		// tetapi diabaikan karena respons telah ditetapkan di atas.
		// Jika gagal, fungsi ini mendapat "jqXHR", "status", "error"
		} ).selalu( panggilan balik && fungsi( jqXHR, status ) {
			diri.setiap( fungsi() {
				callback.apply( ini, respons || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	kembalikan ini;
};




jQuery.expr.pseudos.animated = fungsi( elemen ) {
	kembalikan jQuery.grep( jQuery.timer, fungsi( fn ) {
		kembalikan elemen === fn.elem;
	} ).panjang;
};




jQuery.offset = {
	setOffset: fungsi( elemen, opsi, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculPosition,
			posisi = jQuery.css( elemen, "posisi" ),
			curElem = jQuery( elemen ),
			alat peraga = {};

		// Tetapkan posisi terlebih dahulu, jika atas/kiri disetel genap pada elemen statis
		if ( posisi === "statis" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );