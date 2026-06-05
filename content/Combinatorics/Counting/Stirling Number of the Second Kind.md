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
### Theorem
$$
\sum_{n\geq k} \frac{ \genfrac\{\}{0pt}{0}{ n }{ k } }{ n! } x^{n} = \frac{1}{k!}(e^{x}-1)^{k}
$$
#### Proof
Let $\mathcal{A}$ have as its objects on $[n]$ just $[n]$ itself of weight $1$.
$$
\tilde{f}_{\mathcal{A}}(x) = \sum_{n\geq 1} \frac{x^{n}}{n!} = \exp(x) - 1
$$
Now $\mathcal{A}*\dots*\mathcal{A}$ counts ordered partitions of $[n]$, 
and has [[Combinatorics/Counting/Exponential Generating Function]] $(e^{x}-1)^{k}$.
But then the number of ordered partitions of $[n]$ is $k!\genfrac\{\}{0pt}{0}{ n }{ k }$
hence the result.
### Theorem
The egf $\tilde{f}_{\mathrm{Cyc}}(x)$ for cycles on $[n]$ with valutaion $x^{n}$ for $n\geq 1$
$$
\tilde{f}_{\mathrm{Cyc}}(x) = - \log(1-x)
$$
#### Proof 1
$$
\tilde{f}_{\mathrm{Cyc}}(x) = \sum_{n\geq 1} (n-1)! \frac{x^{n}}{n!} = -\log(1-x)
$$
#### Proof 2
$$
\frac{1}{1-x} = \sum_{n\geq 0} n! \frac{x^{n}}{n!} = \tilde{f}_{\mathrm{Per m}}(x) = \tilde{f}_{\operatorname{Set}(\mathrm{Cyc})}(x) = \exp(\tilde{f}_{\mathrm{Cyc}}(x))
$$
which implies
$$
\tilde{f}_{\mathrm{Cyc}}(x) = -\log(1-x)
$$

