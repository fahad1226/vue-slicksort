<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h4 class="font-weight-bold">mother component</h4>
				<ul class="list-group">
					<li class="list-group-item"> {{ info.name }} </li>
					<li class="list-group-item"> {{ info.ID }} </li>
					<li class="list-group-item"> {{ info.email }} </li>
				</ul>
			</div>
			<div class="col-md-6">
				<child_1 
				@updateName="changeName($event)" 
				:myinfo="info"
				:items="items"
				@updateID="changeID($event)"
				@updateEmail="changeEmail($event)"
				@newitem="changeItem($event)"
				/>
			</div>
		</div>

		<div class="row">
			<div class="col-md-5">
				
				<small class="font-weight-bold text-danger">this is for demonstration purpose(parent)</small>
				<ul class="list-group">
					<li class="list-group-item" v-for="item in items">
						{{ item }}
					</li>
				</ul>
			</div>
		</div>		
	</div>
</template>


<script>
	import Child_1 from '@/components/Child_1'
	export default {
		components: {
			Child_1
		},
		data() {
			return {

				info: {
					name  : 'Fahad Bin Munir',
					ID    : 1226,
					email : "fahad@gmail.com"
				},
				items: ['fahad','tamim']
			}
		},
		methods: {

			changeName(name) {
				this.info.name = name;
			},
			changeID(ID) {
				this.info.ID = ID;
			},
			changeEmail(email) {
				this.info.email = email;
			},
			changeItem(item_name) {
				this.items.push(item_name)
			}
		}
	}
</script>