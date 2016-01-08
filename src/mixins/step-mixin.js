export default (superClass) => class extends superClass {
	continue() {
		this.router.navigate(this.next);
	}
}