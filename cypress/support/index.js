Cypress.Server.defaults({
    delay: 500,
    force404: false,
    ignore: (xhr) => {
      return true;
    }
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  import 'cypress-xpath';

  Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-module','data-wc','data-cy','data-test','data-testid','id', 'class', 'attributes', 'tag','nth-child'],
  
  });

  

