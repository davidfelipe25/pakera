<template>
  <div>
	  <header class="Pakera">
		 <h1>Pakera</h1>
	   </header>
	<main class="main">
		<button class="intes" v-on:click="Bom">Levar Para tomar açaí</button>
		<button class="intes" v-on:click="MuitoRuim" >Falar palavrão</button> 
		<button class="intes" v-on:click="Ruim">Trair</button>
		<button class="intes" v-on:click="MuitoBom">Levar no Cinema</button>
		<button class="intes" v-on:click="Legal">Pagar combo no Cinema</button>
		<button class="intes" v-on:click="Ridiculo">Brigar em público</button>
	 	<button class="intes" v-on:click="Mal">Agredir</button>
	 	<button class="intes2" v-on:click="Zerar">x</button>
	 	<h2 class="pontos">Sua Pontuação {{ pontos }} </h2>
	</main>
    </div>

</template>
<script>
export default {
  name: 'Meutrabalho',
  data () {
    return{
     	pontos:0
     	}
    },
    methods:{
      Bom(){
      	this.pontos += +5
      },
      MuitoRuim(){
      	this.pontos += -4
      },
      Ruim(){
      	this.pontos += -3
      },
      MuitoBom(){
      	this.pontos += +10
      },
      Legal(){
      	this.pontos += +5
      },
      Ridiculo(){
      	this.pontos += -9
      },
      Mal(){
      	this.pontos += -10
      },
      x(){
      	this.pontos += -0
          }

      }
  }  

 
</script>
<style scoped>
.Pakera{
	color:#000;
	font-size:20px;
	

}
.intes{
	color:#000;
	width:35%; 
	height:40px;
	font-size:14px;
	margin: 2%;
	border-radius: 15px;

}
.intes2{
	border-radius: 50%;
}
.pontos{
	color:#000;
	font-size:30px;

}
.main{
	display:flex;
	justify-content:space-between;
	align-items: center;
	flex-direction: column;

}

</style>