Router.configure({
	layoutTemplate:'layout'
});

Router.route('home',{
	path: '/',
	template: 'home',
	data: function(){
		return {
			workers: Workers.find()
		}
	}
});
Router.route('allusers',{
	path: '/allusers',
	template: 'allusers',
	data: function(){
		return {
			workers: Workers.find()
		}
	}
});
Router.route('/allusers/:_id',{
	template: 'singleUser',
	name: 'singleUser',
	data: function(){
		return {
			worker: Workers.findOne(this.params._id),
			workers: Workers.find()
		}
	}
});
Router.route('mrb1',{
	path: '/mrb1',
	template: 'mrb1',
});
Router.route('mrb2',{
	path: '/mrb2',
	template: 'mrb2',
});