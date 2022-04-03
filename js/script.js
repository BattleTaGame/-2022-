jQuery(document).ready(function(){
    jQuery('.stalcraftd').slideToggle(1);
    jQuery('.farcryd').slideToggle(1);
    jQuery('.minecraftd').slideToggle(1);
    jQuery('.terrariad').slideToggle(1);
    jQuery('.factoriod').slideToggle(1);
    jQuery('.chessd').slideToggle(1);
    jQuery('.chekchersd').slideToggle(1);
    jQuery('.stalkerd').slideToggle(1);
    jQuery('.deadcellsd').slideToggle(1);
    jQuery('.hollow_knightd').slideToggle(1);
    jQuery('.dishonoredd').slideToggle(1);
    jQuery('.lostplanetd').slideToggle(1);
    jQuery('.nearautomatad').slideToggle(1);
    jQuery('.cyberpunkd').slideToggle(1);

    jQuery('.discription').slideToggle(1);

    jQuery('.game__iconn').on('click', function(){
        var i = jQuery(this).parent().find("input[type=text]").val();
        i = Number(i);
        jQuery('.discription').hide(1);
        jQuery('.stalcraftd').hide(1);
        jQuery('.farcryd').hide(1);
        jQuery('.minecraftd').hide(1);
        jQuery('.terrariad').hide(1);
        jQuery('.factoriod').hide(1);
        jQuery('.chessd').hide(1);
        jQuery('.chekchersd').hide(1);
        jQuery('.stalkerd').hide(1);
        jQuery('.deadcellsd').hide(1);
        jQuery('.hollow_knightd').hide(1);
        jQuery('.dishonoredd').hide(1);
        jQuery('.lostplanetd').hide(1);
        jQuery('.nearautomatad').hide(1);
        jQuery('.cyberpunkd').hide(1);
        
        jQuery('.discription').slideToggle(1);
        

        if(i == 1){
            jQuery('.farcryd').slideToggle(2);
        }else if(i == 2){
            jQuery('.stalcraftd').slideToggle(2);
        }else if(i == 3){
            jQuery('.stalkerd').slideToggle(2);
        }else if(i == 4){
            jQuery('.hollow_knightd').slideToggle(2);
        }else if(i == 5){
            jQuery('.factoriod').slideToggle(2);
        }else if(i == 6){
            jQuery('.deadcellsd').slideToggle(2);
        }else if(i == 7){
            jQuery('.chekchersd').slideToggle(2);
        }else if(i == 8){
            jQuery('.chessd').slideToggle(2);
        }else if(i == 9){
            jQuery('.minecraftd').slideToggle(2);
        }else if(i == 10){
            jQuery('.terrariad').slideToggle(2);
        }else if(i == 11){
            jQuery('.dishonoredd').slideToggle(2);
        }else if(i == 12){
            jQuery('.lostplanetd').slideToggle(2);
        }else if(i == 13){
            jQuery('.nearautomatad').slideToggle(2);
        }else if(i == 14){
            jQuery('.cyberpunkd').slideToggle(2);
        }
        else{
            
            alert('НЕДОРАБОТОЧКА!!!');
            jQuery('.farcry').val(1);
            jQuery('.stalcraft').val(2);
            jQuery('.stalker').val(3);
            jQuery('.hollow_knight').val(4);
            jQuery('.factorio').val(5);
            jQuery('.deadcells').val(6);
            jQuery('.chekchers').val(7);
            jQuery('.chess').val(8);
            jQuery('.minecraft').val(9);
            jQuery('.terraria').val(10);
            jQuery('.dishonored').val(11);
            jQuery('.lostplanet').val(12);
            jQuery('.nearautomata').val(13);
            jQuery('.cyberpunk').val(14);
        }

    });

    jQuery('.x').on('click', function(){
        jQuery('.discription').slideToggle(1);
    });
});