export class App {
  configureRouter(config, router) {
    config.title = 'USDA';
    config.map([
      { route: ['', 'welcome'],       name: 'welcome',             moduleId: 'welcome',             nav: true, title: 'Welcome' },
      { route: 'address',             name: 'address',             moduleId: 'address',             nav: true, title: 'Household Address'},
      { route: 'children',            name: 'children',            moduleId: 'children',            nav: true, title: 'Household Children' },
      { route: 'children/enrollment', name: 'children/enrollment', moduleId: 'children/enrollment', nav: true, title: 'School Enrollment'},
      { route: 'children/headstart',  name: 'children/headstart',  moduleId: 'children/headstart',  nav: true, title: 'Head Start Enrollment'},
      { route: 'children/foster',     name: 'children/foster',     moduleId: 'children/foster',     nav: true, title: 'Foster Children'},
      { route: 'children/homeless',   name: 'children/homeless',   moduleId: 'children/homeless',   nav: true, title: 'Homeless Children'},
      { route: 'assistance',          name: 'assistance',          moduleId: 'assistance',          nav: true, title: 'Assistance Programs'},
      { route: 'children/income-one', name: 'children/income-one', moduleId: 'children/income-one', nav: true, title: 'Child Income'},
      { route: 'children/income',     name: 'children/income',     moduleId: 'children/income',     nav: true, title: 'Child Income'},
      { route: 'adults',              name: 'adults',              moduleId: 'adults',              nav: true, title: 'Household Adults'},
      { route: 'income',              name: 'income',              moduleId: 'income',              nav: true, title: 'Adult Income'},
      { route: 'verify',              name: 'verify',              moduleId: 'verify',              nav: true, title: 'Verify'},

    ]);

    this.router = router;
  }
}
