
	G = 6.67e-11 ;
	mz = 5.972e24 ;

	function skaiciuoti() {
	
		res = document.getElementById ( "rez" );
		
		aukstis = parseFloat ( document.getElementById ("aukstis" ).value ) * 1000;
		laiko_zingsnis = parseFloat ( document.getElementById ( "delta_t" ).value );
		kiek_kartu_skaiciuoti = parseInt ( document.getElementById ( "kiek" ).value );
		
		res_str = '<table class="res">';
		res_str += '<tr><th>t, sek</th><th>a</th><th>v</th><th>s</th><th>aukštis</th></tr>';
		
		t = 0;
		v = 0;
		
		for ( i = 0; i < kiek_kartu_skaiciuoti ; i++ ) {
		
			a = ( ( G  * ( mz ) / ( aukstis * aukstis )  ) * ( t * t )  ) / 2; 
			
			v = a * t;				
		
			s =  v * t +  ( a * t * t ) / 2;
			
			aukstis = aukstis - s;
			
			res_str  += '<tr><td>' + t + '</td><td>'  + a + '</td><td>'  + v + '</td><td>'  + s + '</td><td>'  + aukstis + '</td></tr>';

			t += laiko_zingsnis;
		}	
		res_str += '</table>'
		
		res.innerHTML = res_str ;
	}