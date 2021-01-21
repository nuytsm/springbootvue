/**
 * 
 */



window.onload = function () {
	
	var optionAxios = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
		
var app = new Vue({
  el: '#app',
  data: {
    message: '',
    list: ['kjjhjk','kjhkjhkjhkjhkjh'] 
  },
	methods:{
		loadAlbums(){
	        axios.get('http://localhost:8080/byname?name=' + this.message)
	            .then(function( response ){
	                this.list = response.data;
	                let data = response.data;
	                data.forEach((item) => {
	                	console.log("found: ", item.id)
	                })
	            }.bind(this));
	    },
	    addstudent(){
	        axios.post('http://localhost:8080/addstudent', {
	        		artistname:this.message
	        	})
	            .then(function( response ){
	                
	            }.bind(this));
	    },
		
		addtolist: function (event) {
		      this.list.push(this.message)
		    }
  ,
		removefromlist: function(index){
			console.log("remove" + index)
			this.list.splice(index, 1);
		}
	}
		
})
}