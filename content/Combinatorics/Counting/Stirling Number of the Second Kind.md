The number $\genfrac{ \{ } {\} }{0pt}{0}{ n }{ k }$ (read $n$ partition $k$) 
is the number of partitions of $[n]$ into $k$ nonempty parts, 
or equivalently, 
the number of equivalence relations of $[n]$
with $k$ equivalence classes

### Theorem
$$
\genfrac{ \{ }{ \} }{0pt}{0}{ n+1 }{ k } = \genfrac{ \{ }{ \} }{0pt}{0}{ n }{ k-1 } + k \genfrac{ \{ }{ \} }{0pt}{0}{ n }{ k }
$$
#### Proof
We have two cases.
If $\{ n+1 \}$ is an equivalence class, 
then there is $k-1$ other equivalence classes in $[n]$
This gives $\genfrac{ \{ }{ \} }{0pt}{0}{ n }{ k-1 }$.
Alternatively, if $n+1$ is in some other equivalence class,
then there were $\genfrac{ \{ }{ \} }{0pt}{0}{ n }{ k }$ ways to choose the other equivalence classes,
and $k$ ways to add $n+1$ to one of them.
### Theorem
Let $\cdot ^{\underline{ k }}$ be the [[Combinatorics/Counting/Falling Factorial]]
Then:
$$
x^{n} = \sum_{k=0}^{n} \genfrac{ \{ }{ \} }{0pt}{0}{ n }{ k } x^{\underline{k}}
$$
#### Proof 1
We can do induction on $n$:
$$
\begin{align}
\sum_{k=0}^{n+1} \genfrac{\{}{\}}{0pt}{0}{ n+1 }{ k } x^{\underline{ k }} 
 &= \sum_{k=0}^{n} \genfrac{\{}{\}}{0pt}{0}{ n }{ k }x^{\underline{ k+1 }} 
 + \sum_{k=0}^{n} k\genfrac{\{}{\}}{0pt}{0}{ n }{ k }x^{\underline{ k }} \\
 & =\sum_{k=0}^{n} \genfrac{\{}{\}}{0pt}{0}{ n }{ k }x^{\underline{ k }}(x-k)  
+ \sum_{k=0}^{n} k \genfrac{\{}{\}}{0pt}{0}{ n }{ k } x^{\underline{ k }} \\
 & = x \sum_{k=0}^{n} \genfrac{\{}{\}}{0pt}{0}{ n }{ k }x^{\underline{ k }} \\
 & = x^{n+1}
\end{align}
$$
#### Proof 2
Suppose we are colouring the set $[n]$ into $x$ colours
(where $x\in \mathbb{N}$)
We can do this in $x^{n}$ ways.
Each of those colourings uses $k\leq n$ colours.
There is $\genfrac{\{}{\}}{0pt}{0}{ n }{ k }$ ways to partition the set into $k$ partitions,
and then for each partition 
there is $x^{\underline{ k }}$ ways to assign different colours to the $k$ parts.
Summing over each $k$, we are done.
Note that both LHS and RHS are polynomials of degree $n$
thus if they match on $\mathbb{N}$ they have to match on $\mathbb{C}$
### Theorem
Let $\cdot ^{\overline{ k }}$ be [[Combinatorics/Counting/Rising Factorial]]
Then:
$$
x^{n} = \sum_{k=0}^{n}(-1)^{n-k} \genfrac{\{}{\}}{0pt}{0}{ n }{ k } x^{\overline{k}}
$$
#### Proof
Substitute $x \to -x$ in the previous theorem.
