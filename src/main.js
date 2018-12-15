import createElement from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'
import diff from './vdom/diff'

const vApp = createElement('div', {
    attrs: {
        id: 'app'
    },
    children: [
        createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/hcvq7eSU4Fv8s/giphy.gif'
            }
        }),
        createElement('p', {
            attrs: {
                class: 'paragraph'
            },
            children: ['Ooh! Look at this bouncing boobs!']
        })
    ]
})

const $app = render(vApp)
mount($app, document.getElementById('app'))
