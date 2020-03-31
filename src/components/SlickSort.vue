<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2 class="display-4 text-secondary">Vue Slicksort</h2>
				<SlickList lockAxis="y" v-model="items">
					<SlickItem v-for="(item, index) in items" :index="index" :key="index">
						<div>
							<div class="list-group-item" v-model="items">
								<button  class="btn btn-secondary" @click="getData"> {{ item }} </button>
							</div>
						</div>
					</SlickItem>
				</SlickList>
			</div>
		</div>
	</div>
</template>

<script>
	
	import { SlickList, SlickItem } from 'vue-slicksort';
	export default {

		components: {
			
			SlickList,SlickItem
		},
		data() {
			return {
				items: []
				//items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
			}
		},
		mounted() {
			
			axios.get('../static/site-config.json')
			.then(response => {
				
				this.items = response.data.blocks.order;
				//console.log(response.data.blocks.data)
				
			}).catch(err => {
				console.log(err);
			})
			
		},
		methods: {
			getData() {
				axios.get('../static/site-config.json')
				.then(response => {
					console.log(response.data.blocks.data)
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}

</script>