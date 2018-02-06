<h1><b>Daily Work Flow:</b></h1>

<ol>
  <li> List of problem(s) you want to do today</li>
  <li>Divide the problem(s) into groups</li>
  <li>Put each groups into an issue in the issues page (Issue name is in issue#number format. e.g issue#1)</li>
  <li>Go to your terminal and navigate to repo folder</li>
  <li>Do rebase <code>git pull origin master</code></li>
  <li>Make a daily branch <code>git checkout -b MonthDate</code> e.g <code>git checkout -b feb10</code></li>
  <li>Make an issue branch <code>git checkout -b IssueNumber</code> e.g <code>git checkout -b issue#10</code></li>
  <li>Do the thing that you need to do</li>
  <li>When you are done with the problem, Add your changes <code>git add -A</code></li>
  <li>Commit your problem <code>git commit -m Did all I need to do</code> (start with a verb and describe what you did)</li>
  <li>Go to daily branch <code>git checkout MonthDate</code></li>
  <li>Merge the branch <code>git merge IssueNumber</code></li>
  <li>Close the issue that you did in issue page on github</li>
  <li>Repeat step 7-12 until you are done</li>
  <li>Go to master branch <code>git checkout master</code></li>
  <li>Push the daily branch <code>git push origin MonthDate</code></li>
  <li>Go to the repo github page and do a pull request</li>
  <li>Ask the others to review and merge the pull request</li>
</ol>
