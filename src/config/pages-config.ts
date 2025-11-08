class PagesConfig {
	HOME = '/';
	LOGIN = '/login';
	DASHBOARD = '/dashboard';
	MY_HABIT = '/my-habit';

	PUBLIC = [this.HOME, this.LOGIN];
	PROTECTED = [this.DASHBOARD, this.MY_HABIT];
}
export const PAGES = new PagesConfig();
