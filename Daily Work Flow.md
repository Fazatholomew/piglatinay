<h1><b>Daily Work Flow:</b></h1>

<ol>
  <li> List of problem(s) you want to do today</li>
  <li>Divide the problem(s) into groups</li>
  <li>Put each groups into an issue in the issues page (Issue name is in issue#number format. e.g issue#1)</li>
  <li>Go to your terminal and navigate to repo folder</li>
  <li>Do rebase ```git pull origin master```</li>
  <li>Make a daily branch `git checkout -b MonthDate` e.g git checkout -b feb10</li>
  <li>Make an issue branch `git checkout -b IssueNumber` e.g git checkout -b issue#10</li>
  <li>Do the thing that you need to do</li>
  <li>When you are done with the problem, Add your changes (git add -A)</li>
  <li>Commit your problem `git commit -m "Thing that you did."` (start with a verb and describe what you did)</li>
  <li>Go to daily branch `git checkout MonthDate`</li>
  <li>Merge the branch `git merge IssueNumber`</li>
  <li>Close the issue that you did in issue page on github</li>
  <li>Repeat step 7-12 until you are done</li>
  <li>Go to master branch `git checkout master`</li>
  <li>Push the daily branch `git push origin MonthDate`</li>
  <li>Go to the repo github page and do a pull request</li>
  <li>Ask the others to review and merge the pull request</li>
</ol>
