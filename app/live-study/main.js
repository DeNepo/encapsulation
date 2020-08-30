import ExerciseJS from './javascript/exercise.js';

export default class LiveStudy {

  title = 'Live Study';
  virDir = {};
  populated = {};
  active = null;
  editor = null;
  buttonsContainer = null;
  language = '';
  loopGuard = {
    active: false,
    max: 20
  }
  clearAll = {
    intervals: false,
    timeouts: false
  }

  constructor(index, editor, buttonsContainer) {
    this.virDir = index;
    this.populated = LiveStudy.populate(index, index.path, index.config);
    this.title = index.config.title;
    this.editor = editor;
    this.buttonsContainer = buttonsContainer;
    if (index.config.loopGuard) {
      this.loopGuard = index.config.loopGuard;
    }
  }


  static populate(data, path, config) {
    const Exercise = ExerciseJS;
    const copy = Object.assign({}, data);
    if (data.files) {
      copy.populated = data.files
        .map(file => new Exercise(file.path, path, config));
    };
    if (data.dirs) {
      copy.dirs = data.dirs.map(subDir => LiveStudy.populate(subDir, path + subDir.path, subDir.config ? Object.assign({}, config, subDir.config) : config));
    };
    return copy;
  }

  renderExercises(virDir = this.populated) {

    const detailsEl = document.createElement('details');
    detailsEl.style = 'margin-top: 1%; margin-bottom: 1%;';

    const summaryEl = document.createElement('summary');
    summaryEl.innerHTML = virDir.path;
    detailsEl.appendChild(summaryEl);

    const subListEl = document.createElement('ul');
    subListEl.style = 'padding-left: 1em';
    if (virDir.populated) {
      virDir.populated.forEach(exercise => {
        // const exerciseEl = exercise.render();
        const exerciseEl = document.createElement('button');
        exerciseEl.innerHTML = exercise.path.rel;
        exerciseEl.onclick = () => {
          history.replaceState(null, "", `?path=${encodeURIComponent(exercise.path.abs)}`);
          document.getElementById('current-path').innerHTML = exercise.path.abs;
          editor.setModel(exercise.monacoModel);

          if (exercise.code === null) {
            exercise.load((err, code) => {
              exercise.monacoModel.setValue(code);
              this.renderStudyButtons(exercise);
              if (exercise.language === 'html') {
                document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
              }
            });
          } else {
            this.renderStudyButtons(exercise);
            if (exercise.language === 'html') {
              document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(exercise.code);
            }
          }
          this.active = exercise;
        }

        const loadChangesEl = document.createElement('button');
        loadChangesEl.innerHTML = 'reload';
        loadChangesEl.onclick = () => {
          exercise.load((err, code) => {
            exercise.monacoModel.setValue(code);
            editor.setModel(exercise.monacoModel);
            this.renderStudyButtons(exercise);
            if (exercise.language === 'html') {
              document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
            }
          });
        }

        const exerciseContainer = document.createElement('div');
        exerciseContainer.style = 'margin-top: 0.5em; margin-bottom: 0.5em;';
        exerciseContainer.appendChild(exerciseEl);
        exerciseContainer.appendChild(loadChangesEl);
        subListEl.appendChild(exerciseContainer);
      });
    };
    if (virDir.dirs) {
      virDir.dirs.forEach(subDir => {
        const subDirEl = this.renderExercises(subDir);
        subListEl.appendChild(subDirEl);
      });
    };
    detailsEl.appendChild(subListEl);
    return detailsEl;
  }


  renderLoopGuardEl(loopGuard = this.loopGuard) {

    const withLoopGuard = document.createElement('input');
    withLoopGuard.setAttribute('type', 'checkbox');
    withLoopGuard.checked = loopGuard.active;
    withLoopGuard.onchange = () => this.loopGuard.active = !this.loopGuard.active;

    const loopGuardInput = document.createElement('input');
    loopGuardInput.value = loopGuard.max;
    loopGuardInput.name = 'max';
    loopGuardInput.style = 'width:3em';
    loopGuardInput.onchange = () => loopGuard.max = Number(loopGuardInput.value);

    const loopGuardForm = document.createElement('form');
    loopGuardForm.style = 'display:inline-block;';
    loopGuardForm.appendChild(withLoopGuard);
    loopGuardForm.appendChild(document.createTextNode('loop guard: '));
    loopGuardForm.appendChild(loopGuardInput);

    return loopGuardForm;
  }

  renderStudyButtons(exercise) {
    const container = document.createElement('div');

    // const clearConsoleButton = document.createElement('button');
    // clearConsoleButton.innerHTML = 'clear console';
    // clearConsoleButton.onclick = () => console.clear();
    // container.appendChild(clearConsoleButton);

    const formatButton = document.createElement('button');
    formatButton.innerHTML = 'format code';
    formatButton.onclick = () => editor.trigger('anyString', 'editor.action.formatDocument');
    container.appendChild(formatButton);


    // const flowchartDiv = document.createElement('div');
    // flowchartDiv.style = 'display: inline;';
    // const flowchartCheckbox = document.createElement('input');
    // flowchartCheckbox.type = 'checkbox';
    // flowchartDiv.appendChild(flowchartCheckbox);
    // flowchartDiv.appendChild(document.createTextNode('flowchart'));
    // let broken = false;
    // flowchartDiv.onclick = async () => {
    //   if (broken) { return; }
    //   try {
    //     js2flowchart.convertCodeToSvg('');
    //   } catch (_) {
    //     const defineTemp = define;
    //     define = undefined;
    //     try {
    //       const res = await fetch('../app/lib/js2flowchart.js');
    //       const src = await res.text();
    //       eval(src)
    //     } catch (err) {
    //       broken = true;
    //     }
    //     define = defineTemp;
    //   }
    //   flowchartCheckbox.checked = flowchartCheckbox.checked
    //     ? false : true;
    //   const editorDiv = document.getElementById('container');
    //   const vizDiv = document.getElementById('viz');
    //   if (flowchartCheckbox.checked) {
    //     editorDiv.style.width = '50%';
    //     vizDiv.style.display = 'block';
    //     renderSVG();
    //   } else {
    //     editorDiv.style.width = '100%';
    //     vizDiv.style.display = 'none';
    //   }
    // };
    // flowchartCheckbox.onclick = flowchartDiv.onclick;
    // container.appendChild(flowchartDiv);

    // const renderSVG = debounce(() => {
    //   const code = getSelection();
    //   const deCommented = strip(code);

    //   // https://stackoverflow.com/a/58770287
    //   //   // 1) replace "/" in quotes with non-printable ASCII '\1' char
    //   //   .replace(/("([^\\"]|\\")*")|('([^\\']|\\')*')/g, (m) => m.replace(/\//g, '{~=|=~}'))
    //   //   // 2) clear comments
    //   //   .replace(/(\/\*[^*]+\*\/)|(\/\/[^\n]+)/g, '')
    //   //   // 3) restore "/" in quotes
    //   //   .replace(/{~=|=~}/g, '/');
    //   try {
    //     const nativeConsoleError = console.error;
    //     console.error = () => { };
    //     const svgEl = js2flowchart.convertCodeToSvg(deCommented);
    //     console.error = nativeConsoleError;
    //     document.getElementById('viz').innerHTML = svgEl;
    //   } catch (e) {
    //     if (e.message.includes("read property 'file' of undefined")) {
    //       document.getElementById('viz').innerHTML = 'unknown syntax error';
    //     } else {
    //       document.getElementById('viz').innerHTML = e.name + ': ' + e.message;
    //     }
    //   }
    // }, 200);

    // editor.onKeyUp((e) => {
    //   if (flowchartCheckbox.checked) {
    //     renderSVG();
    //   }
    // });
    // editor.onDidChangeCursorSelection((e) => {
    //   if (flowchartCheckbox.checked) {
    //     renderSVG();
    //   };
    // });

    // const getSelection = () => {
    //   const editorSelection = editor.getSelection();
    //   const editorSelectionEntries = Object.entries(editorSelection);
    //   const columnEntries = [];
    //   const lineEntries = [];
    //   for (const entry of editorSelectionEntries) {
    //     if (entry[0].includes('Column')) {
    //       columnEntries.push(entry);
    //     } else {
    //       lineEntries.push(entry);
    //     }
    //   }
    //   const firstLine = lineEntries[0][1];
    //   const firstColum = columnEntries[0][1];
    //   const noSelection = columnEntries.every((entry) => entry[1] === firstColum)
    //     && lineEntries.every((entry) => entry[1] === firstLine);
    //   let selection = '';
    //   if (noSelection) {
    //     selection = editor.getValue();
    //   } else {
    //     const start = editorSelection.startLineNumber;
    //     const end = editorSelection.endLineNumber;
    //     for (let i = start; i <= end; i++) {
    //       selection += editor.getModel().getLineContent(i) + '\n';
    //     }
    //   }
    //   return selection;
    // }



    const permalinkButton = document.createElement('button');
    permalinkButton.innerHTML = 'generate permalink';
    permalinkButton.onclick = () => {
      const text = window.location.origin + window.location.pathname + '?code=' + encodeURIComponent(this.editor.getValue())
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/%09/g, '%20%20');

      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(function () {
        // console.log('Async: Copying to clipboard was successful!');
      }, function (err) {
        // console.error('Async: Could not copy text: ', err);
        fallbackCopyTextToClipboard(text);
      });

      function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          // console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
        window.scrollTo(0, 0);
      };

      alert("copied permalink");

    }
    container.appendChild(permalinkButton);


    container.appendChild(document.createElement('br'));


    container.appendChild(document.createElement('br'));

    // container.appendChild(document.createTextNode('run code: '));

    for (let vizTool of exercise.config.buttons) {
      const name = Object.keys(vizTool)[0];
      const include = Object.values(vizTool)[0];
      if (include) {
        const vizToolButton = document.createElement('button');
        vizToolButton.style = 'padding-right: .5em';
        vizToolButton.innerHTML = name;
        vizToolButton.onclick = () => {
          exercise.studyWith(Object.keys(vizTool)[0], 'monacoModel', exercise.config.loopGuard || this.loopGuard)
        };
        container.appendChild(vizToolButton);
      }
    }

    this.buttonsContainer.innerHTML = '';
    this.buttonsContainer.appendChild(container);

    if (this.virDir.config.language !== 'html') {
      container.appendChild(this.renderLoopGuardEl(exercise.config.loopGuard || this.loopGuard));
    }
  }

  render(exercise = this.active) {
    const container = document.createElement('div');

    const renderedExercises = this.renderExercises();
    const unWrapped = renderedExercises.lastChild;
    const divContainer = document.createElement('div');
    for (let child of Array.from(unWrapped.children)) {
      divContainer.appendChild(child);
    }
    container.appendChild(divContainer);

    if (exercise) {
      this.renderStudyButtons(exercise);
    } else {
      const findFirstExercise = (virDir) => {
        if (virDir.populated) {
          return virDir.populated[0]
        } else if (virDir.dirs) {
          return findFirstExercise(virDir.dirs[0]);
        }
      }
      this.renderStudyButtons(findFirstExercise(this.populated));
    }

    return container;
  }
}

/*!
 * strip-comments <https://github.com/jonschlinkert/strip-comments>
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

// lib/compile.js
const compile = (cst, options = {}) => {
  const keepProtected = options.safe === true || options.keepProtected === true;
  let firstSeen = false;

  const walk = (node, parent) => {
    let output = '';
    let inner;
    let lines;

    for (const child of node.nodes) {
      switch (child.type) {
        case 'block':
          if (options.first && firstSeen === true) {
            output += walk(child, node);
            break;
          }

          if (options.preserveNewlines === true) {
            inner = walk(child, node);
            lines = inner.split('\n');
            output += '\n'.repeat(lines.length - 1);
            break;
          }

          if (keepProtected === true && child.protected === true) {
            output += walk(child, node);
            break;
          }

          firstSeen = true;
          break;
        case 'line':
          if (options.first && firstSeen === true) {
            output += child.value;
            break;
          }

          if (keepProtected === true && child.protected === true) {
            output += child.value;
          }

          firstSeen = true;
          break;
        case 'open':
        case 'close':
        case 'text':
        case 'newline':
        default: {
          output += child.value || '';
          break;
        }
      }
    }

    return output;
  };

  return walk(cst);
};


// lib/node.js
class Node {
  constructor(node) {
    this.type = node.type;
    if (node.value) this.value = node.value;
    if (node.match) this.match = node.match;
    this.newline = node.newline || '';
  }
  get protected() {
    return Boolean(this.match) && this.match[1] === '!';
  }
}

class Block extends Node {
  constructor(node) {
    super(node);
    this.nodes = node.nodes || [];
  }
  push(node) {
    this.nodes.push(node);
  }
  get protected() {
    return this.nodes.length > 0 && this.nodes[0].protected === true;
  }
}

// lib/languages.js
const languages = {
  javascript: {
    BLOCK_OPEN_REGEX: /^\/\*\*?(!?)/,
    BLOCK_CLOSE_REGEX: /^\*\/(\n?)/,
    LINE_REGEX: /^\/\/(!?).*/
  }
};

// lib/parse.js
const constants = {
  ESCAPED_CHAR_REGEX: /^\\./,
  QUOTED_STRING_REGEX: /^(['"`])((?:\\.|[^\1])+?)(\1)/,
  NEWLINE_REGEX: /^\r*\n/
};

const parse = (input, options = {}) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be a string');
  }

  const cst = new Block({ type: 'root', nodes: [] });
  const stack = [cst];
  const name = (options.language || 'javascript').toLowerCase();
  const lang = languages[name];

  if (typeof lang === 'undefined') {
    throw new Error(`Language "${name}" is not supported by strip-comments`);
  }

  const { LINE_REGEX, BLOCK_OPEN_REGEX, BLOCK_CLOSE_REGEX } = lang;
  let block = cst;
  let remaining = input;
  let token;
  let prev;

  const source = [BLOCK_OPEN_REGEX, BLOCK_CLOSE_REGEX].filter(Boolean);
  let tripleQuotes = false;

  if (source.every(regex => regex.source === '^"""')) {
    tripleQuotes = true;
  }

  /**
   * Helpers
   */

  const consume = (value = remaining[0] || '') => {
    remaining = remaining.slice(value.length);
    return value;
  };

  const scan = (regex, type = 'text') => {
    const match = regex.exec(remaining);
    if (match) {
      consume(match[0]);
      return { type, value: match[0], match };
    }
  };

  const push = node => {
    if (prev && prev.type === 'text' && node.type === 'text') {
      prev.value += node.value;
      return;
    }
    block.push(node);
    if (node.nodes) {
      stack.push(node);
      block = node;
    }
    prev = node;
  };

  const pop = () => {
    if (block.type === 'root') {
      throw new SyntaxError('Unclosed block comment');
    }
    stack.pop();
    block = stack[stack.length - 1];
  };

  /**
   * Parse input string
   */

  while (remaining !== '') {
    // escaped characters
    if ((token = scan(constants.ESCAPED_CHAR_REGEX, 'text'))) {
      push(new Node(token));
      continue;
    }

    // quoted strings
    if (block.type !== 'block' && (!prev || !/\w$/.test(prev.value)) && !(tripleQuotes && remaining.startsWith('"""'))) {
      if ((token = scan(constants.QUOTED_STRING_REGEX, 'text'))) {
        push(new Node(token));
        continue;
      }
    }

    // newlines
    if ((token = scan(constants.NEWLINE_REGEX, 'newline'))) {
      push(new Node(token));
      continue;
    }

    // block comment open
    if (BLOCK_OPEN_REGEX && options.block && !(tripleQuotes && block.type === 'block')) {
      if ((token = scan(BLOCK_OPEN_REGEX, 'open'))) {
        push(new Block({ type: 'block' }));
        push(new Node(token));
        continue;
      }
    }

    // block comment close
    if (BLOCK_CLOSE_REGEX && block.type === 'block' && options.block) {
      if ((token = scan(BLOCK_CLOSE_REGEX, 'close'))) {
        token.newline = token.match[1] || '';
        push(new Node(token));
        pop();
        continue;
      }
    }

    // line comment
    if (LINE_REGEX && block.type !== 'block' && options.line) {
      if ((token = scan(LINE_REGEX, 'line'))) {
        push(new Node(token));
        continue;
      }
    }

    // Plain text (skip "C" since some languages use "C" to start comments)
    if ((token = scan(/^[a-zABD-Z0-9\t ]+/, 'text'))) {
      push(new Node(token));
      continue;
    }

    push(new Node({ type: 'text', value: consume(remaining[0]) }));
  }

  return cst;
};
const strip = (input, options) => {
  const opts = { ...options, block: true, line: true };
  return compile(parse(input, opts), opts);
};
strip.block = (input, options) => {
  const opts = { ...options, block: true };
  return compile(parse(input, opts), opts);
};
strip.line = (input, options) => {
  const opts = { ...options, line: true };
  return compile(parse(input, opts), opts);
};
strip.first = (input, options) => {
  const opts = { ...options, block: true, line: true, first: true };
  return compile(parse(input, opts), opts);
};
strip.parse = parse;
