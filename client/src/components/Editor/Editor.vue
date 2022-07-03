<template>
    <textarea
        ref="editorEl"
    />
</template>

<script>
import * as CodeMirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/darcula.css';
// import 'codemirror/keymap/vim';
// import 'codemirror/mode/python/python';


export default {
    name: "Editor",
    props: [
        'initial_content'
    ],

    data() {
        return {
            content: this.initial_content
        }
    },
    mounted(){
        // console.log(this.initial_content);
        this.editor = CodeMirror.fromTextArea(this.$refs.editorEl, {
            lineNumbers: true,
            theme: 'darcula',
            keyMap: 'vim',
            mode: 'python',
            indentUnit: 4
        });
        this.editor.setValue(this.initial_content);
        this.editor.on('change', this.updateCode);
        this.editor.setSize(null, 700);
    },
    methods: {
        setCode(code){
            this.editor.setValue(code);
            this.content = code;
        },
        updateCode(){
            this.content = this.editor.getValue();
        },
        logCode(){
            console.log(this.content);
        },
        getValue(){
            return this.content;
        }
    },

}


</script>

<style scoped>

</style>