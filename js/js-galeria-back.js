// JavaScript Document
$(document).ready(function(){
	
	$("img.galeria-lightbox").on("click" ,function(){
			var alink = $(this).attr('rel');
			
			CargarLightbox(alink);
			
				
	});
	
});

function DeafultLightbox(evento, imagen){
	//alert("Cargar lightbox con la imagen " + imagen +" del evento "+ evento + "\n"+	"envento.php?id="+evento+"&foto="+imagen);
	var alink="evento.php?id="+evento+"&foto="+imagen;
	
	CargarLightbox(alink);
}

function CargarLightbox(alink){
	var id = alink.split('?')[1].split('&')[1].split('=')[1];
	
	$.ajax({
		type: "GET",
		url: alink
	})
		.done(function (json){
				//Falta ordenar para que tome la primera imagen que se haya mandado
				var items = $.parseJSON(json);
				/*var list="[";
				
				for(var i=0; i< items.length; i++){
					list = list + "{src:'" + items[i].src + "'},"
				}
		
				list = list.substring(0, list.length-1);
				list = list +"]";*/
				
				/*$.magnificPopup.open({
					items:items
					,
					gallery: {
					  enabled: true
					},
					type: 'image',
					callbacks:{
						open:function(){
								//blurElement($(".mfp-bg"), 2);
								//blurElement($(".mfp-zoom-out-cur",2));
								blurElement($(".mfp-container",2));
							},
						close:function(){
								//blurElement($(".mfp-bg"), 0);
								//blurElement($(".mfp-zoom-out-cur",0));
								blurElement($(".mfp-container",0));
							}
					}
				});*/

				$(".contenedor").carouselLightbox({
						Items: items,
						ItemId:id, //Id de la imagen que se ha seleccionado
						Blur:false,
						KeyControl:true,
						CloseButton:false,
						SocialMedia:true,
						onSocialMedia:function(){ 
							//alert('iniciar barra');
						},
						onFacebook:function( data ){
							alert('llamar facebook: ' + data);//no funcia
						}
				});
				
				//$('.contenedor').lightbox(); 
			});	
}

function blurElement(element, size){
	var filterVal = 'blur('+size+'px)';
	$(element)
	.css('filter',filterVal)
	.css('webkitFilter',filterVal)
	.css('mozFilter',filterVal)
	.css('oFilter',filterVal)
	.css('msFilter',filterVal);
}