The Stirling number of the first kind $\genfrac[]{0pt}{0}{ n }{ k }$ 
is the number of [[Algebra/Group Theory/Permutation group]] comprised of $k$ cycles.
### Theorem
$$
\genfrac[]{0pt}{0}{ n+1 }{ k } = \genfrac[]{0pt}{0}{ n }{ k-1 } + n\genfrac[]{0pt}{0}{ n }{ k }
$$
#### Proof
$n+1$ is either a fixpoint or not
### Theorem
$$
x^{\overline{ n }} = \sum_{k=1}^{n} \genfrac[]{0pt}{0}{ n }{ k }x^{k}
$$
#### Proof 1
The coefficient of $x^{k}$ in $x^{\overline{ n }}$ 
which we write $[x^{k}]x^{\overline{ n }}$ satisfies:
$$
\begin{align}
[x^{k}]x^{\overline{ n+1 }} = [x^{k}] x^{\overline{ n }}(x+n) \\
 & =[x^{k-1}]x^{\overline{ n }} + n[x^{k}]x^{\overline{ n }}
\end{align}
$$
So it satisfies the same recurrence relation as $\genfrac[]{0pt}{0}{ n }{ k }$
and check some initial conditions.
#### Proof 2
Show 
$$
\genfrac[]{0pt}{0}{ n }{ k } = \sum_{1=a_{1}<a_{2}<\dots<a_{k}\leq n} \frac{ (n-1)! }{ (a_{2}-1)\dots(a_{k}-1) }
$$
by counting cycles.
#### Proof 3
Use [[Combinatorics/Counting/Burnside's Lemma (Orbit-Counting Lemma)]].
Let $G=S_{n}$ act on $\{ f:[n]\to[x] \}$ by permuting the domain
### Theorem
$$
x^{\underline{ n }} = \sum_{k=1}^{n} (-1)^{n-k} \genfrac[]{0pt}{0}{ n }{ k } x^{k}
$$
