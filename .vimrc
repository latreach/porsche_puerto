'""""""""""""""""""""
" Plugins """""""""""""""""""""
syntax on
set nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" Themes and general configuration'
Plugin 'altercation/vim-colors-solarized'
Plugin 'zenbro/mirror.vim'

" File Navigation
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'Xuyuanp/nerdtree-git-plugin'
Plugin 'tiagofumo/vim-nerdtree-syntax-highlight'

" Syntax, linters ond completion
Plugin 'Valloric/YouCompleteMe'
Plugin 'scrooloose/syntastic'
Plugin 'sheerun/vim-polyglot'

" Input Plugins
Plugin 'tpope/vim-surround'
Plugin 'Raimondi/delimitMate'
Plugin 'scrooloose/nerdcommenter'

" Control Version (GIT) support
Plugin 'tpope/vim-fugitive'
Plugin 'mhinz/vim-signify'

" Screen Plugins
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'easymotion/vim-easymotion'
Plugin 'ryanoasis/vim-devicons'

" HTML plugins
Plugin 'rstacruz/sparkup', { 'rtp': 'vim/' }

" Stylesheets Plugins
Plugin 'hail2u/vim-css3-syntax'
Plugin 'cakebaker/scss-syntax.vim'
Plugin 'gko/vim-coloresque'

" Javascript plugins
Plugin 'marijnh/tern_for_vim'
Plugin 'heavenshell/vim-jsdoc'
Plugin 'moll/vim-node'
Plugin 'othree/yajs.vim'
" Plugin 'pangloss/vim-javascript' " Included in vim-polyglot
Plugin 'othree/jspc.vim'
Plugin 'othree/javascript-libraries-syntax.vim'

" Typescript
Plugin 'HerringtonDarkholme/yats.vim'

" Python plugins
Plugin 'ehamberg/vim-cute-python'
Plugin 'tmhedberg/SimpylFold'
Plugin 'jmcantrell/vim-virtualenv'

" PHP Plugins
" Plugin 'joonty/vim-phpqa'

call vundle#end()

filetype plugin indent on


"""""""""""""""""""""""""""
" Plugins Configuration
"""""""""""""""""""""""""""

" CtrlP Config
let g:ctrlp_custom_ignore = 'node_modules\|DS_Store\|git'

" NerdTree config
let NERDTreeIgnore = ['\.pyc$', '\~$'] "ignore files in NERDTree
" NERDTree custom highlight colors
let g:NERDTreeFileExtensionHighlightFullName = 1
let g:NERDTreeExtensionHighlightColor = {}
let g:NERDTreeExtensionHighlightColor['py'] = '009688'
let g:NERDTreeExtensionHighlightColor['js'] = 'F7DF1E'
let g:NERDTreeExtensionHighlightColor['md'] = 'FFFFFF'
let g:NERDTreeExtensionHighlightColor['ts'] = '0179CC'
let g:NERDTreeExtensionHighlightColor['css'] = '1673B6'
let g:NERDTreeExtensionHighlightColor['html'] = 'F16529'
let g:NERDTreeExtensionHighlightColor['php'] = '6C7EB7'
" Quit VIM if NERDTree is the only open buffer
" autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

" Airline Config
set laststatus=2
let g:airline_theme="luna"
let g:airline_powerline_fonts=1
let g:airline#extensions#tabline#enabled=1

" DevIcons Config
" let g:WebDevIconsUnicodeGlyphDoubleWidth = 0
" let g:webdevicons_conceal_nerdtree_brackets = 1
" let g:WebDevIconsNerdTreeAfterGlyphPadding = ''
" let g:WebDevIconsNerdTreeGitPluginForceVAlign = 1

" Syntastic Config
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 1

let g:syntastic_python_checkers = ['pylint']
let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_typescript_checkers = ['tslint']
let g:syntastic_typescript_tsc_args = "--experimentalDecorators"
let g:syntastic_php_checkers = ['phpmd', 'php']

" Pangloss JavaScript Configuration
let g:javascript_plugin_jsdoc = 1
let g:javascript_plugin_ngdoc = 1
let g:javascript_conceal_function       = "ƒ"
let g:javascript_conceal_null           = "ø"
let g:javascript_conceal_this           = "@"
let g:javascript_conceal_return         = "⇚"
let g:javascript_conceal_undefined      = "¿"
let g:javascript_conceal_NaN            = "ℕ"
let g:javascript_conceal_prototype      = "¶"
let g:javascript_conceal_static         = "•"
let g:javascript_conceal_super          = "Ω"
let g:javascript_conceal_arrow_function = "⇒"

" JavaScript libraries syntax highlight
let g:used_javascript_libs = 'underscore,jquery,angularjs,angularui,angularuirouter,requirejs'

" Tern for Vim Config
let g:tern_map_keys = 1

" TypeScript Vim Configuration
let g:typescript_compiler_options = '--experimentalDecorators'

" Python syntax highlight
let python_highlight_all = 1

" Solarized theme
let g:solarized_termcolors=16

" YouCompleteMe Configuration
let g:ycm_autoclose_preview_window_after_completion=1
let g:ycm_auto_trigger=1
let g:ycm_min_num_of_chars_for_completion=1
map <leader>g  :YcmCompleter GoToDefinitionElseDeclaration<CR>

"""""""""""""""""""""
" Settings
"""""""""""""""""""""

" Environment
set encoding=utf-8
set fileformat=unix

" Backspace Workarounds
set backspace=2

" Screen Config
set number
set cursorline
set conceallevel=1
set splitbelow splitright

" Theme Configuration
set t_Co=256
set background=dark
colorscheme solarized

" Indent configuration
set expandtab autoindent
set tabstop=4 softtabstop=4 textwidth=80 shiftwidth=4
au BufNewFile,BufRead *.py,*.ts set tabstop=4 softtabstop=4 textwidth=80 shiftwidth=4
au BufNewFile,BufRead *.js,*.css,*.scss,*.html set tabstop=2 softtabstop=2 textwidth=80  shiftwidth=2

" Folding configuration
set foldlevel=99
set foldmethod=indent

" Autocompletion config
autocmd BufNewFile,BufRead *.scss set ft=scss.css
set completeopt=longest,menuone

" Extra Highlighters
highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/
autocmd BufWinEnter * match ExtraWhitespace /\s\+$/
autocmd InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
autocmd InsertLeave * match ExtraWhitespace /\s\+$/
autocmd BufWinLeave * call clearmatches()

"""""""""""""""""""""
" Mappings
"""""""""""""""""""""

" Leader
let mapleader = "\<Space>"

" Common tasks
noremap <F3> :set invnumber<CR>| " Toggle numbers
nnoremap <Leader>w :w<CR>| " Write file
inoremap <I> <i><C-o><S-I>| " Insert at the beggining of the line
imap <C-c> <CR><Esc>O| " Write between delimit characters
inoremap <expr> <CR> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"
inoremap <expr> <C-n> pumvisible() ? '<C-n>' : '<C-n><C-r>=pumvisible() ? "\<lt>Down>" : ""<CR>'

" Split navigation
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

" NERDTree Mappings
map <C-n> :NERDTreeToggle<CR>

""""""""""""""""""""""""
" Deprecated Plugins
""""""""""""""""""""""""
" Plugin 'jalvesaq/Nvim-R' " R Support
" Plugin 'Quramy/vim-js-pretty-template'
" Plugin 'junegunn/vim-easy-align' " Not recommended for linters
" Plugin 'nvie/vim-flake8' " Python lintern, Evaluate if pylint active

" Plugin 'othree/html5.vim' " Included in vim-polyglot
" Plugin 'othree/html5-syntax.vim' " Inlcuded in vim-polyglot
" Plugin 'leafgarland/typescript-vim' " Included in vim-polyglot
" Plugin 'helino/vim-json' " Included in vim-polyglot
" Plugin 'Shougo/vimproc.vim' " Requirement for tsuquyomi
" Plugin 'pangloss/vim-javascript' " Included in vim-polyglot
"
" Plugin 'Quramy/tsuquyomi' " Evaluate if YouCompleteMe is active
"
" Plugin 'skammer/vim-css-color' " Replaced by vim-coloresque
" Plugin 'ervandew/supertab' " You Complete Me lightweight alternative
" Plugin 'jnurmine/Zenburn'
" Plugin 'embear/vim-localvimrc'
" Plugin 'aereal/vim-colors-japanesque'
" Plugin 'othree/es.next.syntax.vim'
