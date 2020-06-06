

var content = `
<pre><span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag--> cd interactive-terminal-site
<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag--> cat ABOUTME.md<br/>
Hi, My name is Emmanuel Eppinger (<a href="cv.pdf">CV</a>). <!-- sjkfhskjf --> I am a Computer Science and Pre-Law student at Carnegie Mellon University,
graduating sometime soon (Fall '20 or Spring '21, COVID is a mess).

<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag --> ssh emmanuee@unix.andrew.cmu.edu
password: <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->
<span id="a">emmanuee@unix.andrew.cmu.edu</span>:<span id="b">~</span><span id="c">$</span> <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->cat andrew/ABOUTCMU.md

## B.S. in Computer Science, Pre-Law, Computer Systems Concentration <!-- laglaglaglaglaglaglaglaglaglaglaglag -->
#### Selected Course Work:<!-- laglaglaglaglaglag -->

* 15-721: Advanced Database Systems <!-- laglaglag -->
* 15-445: Intro to Database Systems <!-- laglaglag -->
* 15-440: Distributed Systems <!-- laglaglag -->
* 15-746: Storage Systems (Fall 2020) <!-- laglaglag -->

In case you couldn't tell, I like databases!!

<span id="a">emmanuee@unix.andrew.cmu.edu</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->^Dlogout
Connection to unix.andrew.cmu.edu closed.

<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag --> cd experience
<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag --> sqlite3 jump.db
SQLite version 3.28.0 2019-04-15 14:49:49
Enter ".help" for usage hints.
sqlite> <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->SELECT * FROM jump;
Software Engineering Intern | Jump Trading | Summer 2020 | Project:???
sqlite> <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->^D
<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span> <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->mongo "mongodb://localhost:27017/mongodb" --quiet

> <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->experience.mongodb.find()
{
&#9;"role":"Software Engineering Intern",
&#9;"company":"MongoDB",
&#9;"when?":"Summer 2019",
&#9;"team":"GoLang Client Driver",
&#9;"projects":{
&#9;&#9;"change streams":"implement client side of cursors",
&#9;&#9;"retryable reads":"allow driver to automatically retry reads that fail due to network failres",
&#9;&#9;"connection pooling":"implement connection pooling layer of driver"
&#9;"website":"<a href="https://go.mongodb.org">go.mongodb.org</a>"
&#9;}
}
> <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->^D
<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag --> cd ../projects
<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span><!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag --> psql -h localhost -p 15721 -d terrier
psql (12.2, server 9.5devel)
Type "help" for help.

terrier=# <!-- laglaglaglaglaglag -->SELECT * FROM Projects;
        name           |          scope        |     website     |                                                   description
=========================================================================================================================================================================================
Babble                 | PennApps 18           | <a href="https://eppi.ng/babble">eppi.ng/babble</a>  | Completely decentralized chat app, no network required.
NUMA Aware Thread Pool | 15-721 Course Project | <a href="https://github.com/cmu-db/terrier/pull/851">eppi.ng/terrier</a> | Hyper Morsel/SQL Server SQLOS style task scheduler. Simulate large number of threads on system.
B+Tree                 | 15-721 Course Project | <a href="https://eppi.ng/terrier">eppi.ng/terrier</a> | Almost-Latch Free B+Tree. Comparable to BW-Tree and offers 20x improvement for concurrent randomized reads and writes.
(3 rows)
terrier=#<!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->^D
<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span> <!-- laglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglaglag -->cat ../CONTACTME.md

You can learn more about me and my <a href="project-descriptions.html">work here</a> and you can get my <a href="cv.pdf">CV here</a>.<br/>
<span id="a">you@eppi.ng</span>:<span id="b">~</span><span id="c">$</span></pre>


Copyright &copy; Emmanuel J. Eppinger 2020   `

var Typer = {
  text: '',
  accessCountimer: null,
  index: 0,
  speed: 2,
  accessCount: 0,
  deniedCount: 0,
  init: function () {
    accessCountimer = setInterval(function () {
      Typer.updLstChr();
    }, 500);
    Typer.text = Typer.text.slice(0, Typer.text.length - 1);
  },

  content: function () {
    return $('#console').html();
  },

  write: function (str) {
    $('#console').append(str);
    return false;
  },

  addText: function (key) {
    if (key.keyCode == 18) {
      Typer.accessCount++;

      if (Typer.accessCount >= 3) {
        Typer.makeAccess();
      }
    } else if (key.keyCode == 20) {
      Typer.deniedCount++;

      if (Typer.deniedCount >= 3) {
        Typer.makeDenied();
      }
    } else if (key.keyCode == 27) {
      Typer.hidepop();
    } else if (Typer.text) {
      var cont = Typer.content();
      if (cont.substring(cont.length - 1, cont.length) == '|')
        $('#console').html(
          $('#console')
            .html()
            .substring(0, cont.length - 1),
        );
      if (key.keyCode != 8) {
        Typer.index += Typer.speed;
      } else {
        if (Typer.index > 0) Typer.index -= Typer.speed;
      }
      var text = Typer.text.substring(0, Typer.index);
      var rtn = new RegExp('\n', 'g');

      $('#console').html(text.replace(rtn, '<br/>'));

      window.scrollBy(0, 50);
    }

    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault();
    }

    if (key.keyCode != 122) {
      // otherway prevent keys default behavior
      key.returnValue = false;
    }
  },

  updLstChr: function () {
    var cont = this.content();

    if (cont.substring(cont.length - 1, cont.length) == '|')
      $('#console').html(
        $('#console')
          .html()
          .substring(0, cont.length - 1),
      );
    else this.write('|'); // else write it
  },
};

function replaceUrls(text) {
  var http = text.indexOf('http://');
  var space = text.indexOf('.me ', http);

  if (space != -1) {
    var url = text.slice(http, space - 1);
    return text.replace(url, '<a href="' + url + '">' + url + '</a>');
  } else {
    return text;
  }
}

Typer.speed = 3;
Typer.text = content;
Typer.init();

var timer = setInterval('t();', 30);
function t() {
  Typer.addText({ keyCode: 123748 });

  if (Typer.index > Typer.text.length) {
    clearInterval(timer);
  }
}
