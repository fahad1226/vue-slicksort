<template>
	<div class="container">
		<h4 class="font-weight-bold">child component</h4>

		<li @click="editname = ! editname"  class="list-group-item "><strong>{{ myinfo.name }}</strong> </li>
		<input v-if="editname" v-on:keyup.enter="editName" type="text" v-model="name"> 


		<li @click="editid = ! editid" class="list-group-item "><strong>{{ myinfo.ID }}</strong> </li> 
		<input v-if="editid" v-on:keyup.enter="editID" type="text" v-model="id">


		<li @click="editemail = ! editemail" class="list-group-item "><strong>{{ myinfo.email }}</strong></li> 
		<input v-if="editemail" v-on:keyup.enter="editEmail" type="text" v-model="email">

		<br>
		<br>
		<div>
			<small class="text-danger">input for demonstration(child)</small>
			<input class="form-control" type="text" v-model="item_name">
			<button class="btn btn-secondary btn-sm" @click="addItem">+add name</button>
		</div>
	

	</div>
</template>

<script>
	export default {

		props: ['myinfo','items'],
		data() {

			return {

				name: '',
				id: '',
				email: '',
				editname: false,
				editid: false,
				editemail: false,
				item_name: ''
			}
		},
		methods: {
			editName() {
				this.$emit("updateName", this.name)
			},
			editID() {
				this.$emit("updateID", this.id)
			},
			editEmail() {
				this.$emit("updateEmail",this.email)
			},
			addItem() {
				this.$emit("newitem",this.item_name)
			}
		}
	}
</script>


