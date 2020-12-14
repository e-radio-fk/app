import woofmark from 'woofmark';

woofmark(document.querySelector('#ta'), {
    parseMarkdown: require('megamark')
});