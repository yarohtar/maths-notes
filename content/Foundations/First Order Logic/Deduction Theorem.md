Let $S$ be a set of formulae in a first-order [[Foundations/First Order Logic/Language]] $L$. 
Let $p$, $q$ be formulae in $L$. 
Then $S\vdash p\implies q$ 
if and only if
$S\cup \{ p \}\vdash q$
### Proof
Assume $S\vdash(p\implies q)$. Write down a proof of $(p\implies q)$ from $S$ and add the lines 
$$
\begin{align}
p\quad %quad
\quad %quad
 & \text{(premiss)}  \\
q\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$
to obtain a proof of $q$ from $S\cup \{ p \}$

Now assume $S\cup \{ p \}\vdash q$. Let $t_{1},\dots,t_{n}$ be a proof of $q$ from $S\cup \{ p \}$
We prove by induction on $i$ that $S\vdash(p\implies t_{i})$
Induction hypothesis at $i$-th step:
For all $j<i$ we have $S\vdash(p\implies t_{j})$ s.t. if a variable $x$ does not occur free in any premiss in the proof $t_{1},\dots,t_{j}$ of $t_{j}$ from $S\cup \{ p \}$ 
then $x$ must not occur free in any premiss used in the proof of $(p\implies t_{j})$ from $S$.
We now prove that $S\vdash(p\implies t_{i})$ in four cases
##### Case 1
$t_{i}$ is an axiom or $t_{i}\in S$ 
Then
$$
\begin{align}
t_{i}\implies(p\implies t_{i})\quad %quad
\quad %quad
 & \text{(A1)} \\
t_{i}\quad %quad
\quad %quad
 & \text{(axiom or premiss)} \\
p\implies t_{i}\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$
is a proof of $p\implies t_{i}$ from $S$.
##### Case 2
$t_{i}=p$
Then $S\vdash (p\implies t_{i})$ since $\emptyset \vdash(p\implies p)$ in [[Foundations/Propositional Logic/Propositional Logic]]
##### Case 3
$t_{i}$ follows by (MP), i.e. there are some $j,k<i$ s.t. $t_{k}=(t_{j}\implies t_{i})$
By induction hypothesis, we can write down proofs of 
$p\implies t_{j}$ and $p\implies(t_{j}\implies t_{i})$ from $S$ and append the lines
$$
   \begin{align}
(p \implies(t_{j}\implies t_{i}))\implies((p \implies t_{j})\implies(p \implies t_{i}))\quad %quad
\quad %quad
 & \text{(A2)} \\
(p \implies t_{j}) \implies( p \implies t_{i})\quad %quad
\quad %quad
 & \text{(MP)} \\
p \implies t_{i}\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$
##### Case 4
$t_{i}$ follows by (Gen) i.e. there is some $j<i$ where $t_{i}$ is $(\forall x)t_{j}$
where $x\in FV(t_{j})$ and $x$ didn't occur free in any premiss in $t_{1},\dots,t_{j}$
We have two further cases
###### Case 4a 
$x$ occurs free in $p$ 
Then $p$ is not amongst $t_{1},\dots,t_{j}$ so this is a proof from $S$.
We append the lines 
$$
\begin{align}
(\forall x)t_{j}\quad %quad
\quad %quad \\
 & \text{(Gen)} \\
(\forall x)t_{j}\implies(p\implies(\forall x)t_{j})\quad %quad
\quad %quad
 & \text{(A1)} \\
p\implies(\forall x)t_{j}\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$
###### Case 4b
$x$ does not occur free in $p$ 
By induction hypothesis, there's a proof of $p\implies t_{j}$ from $S$ 
which is s.t. $x$ does not occur free in any premiss used.
We append the lines
$$
\begin{align}
(\forall x)(p\implies t_{j})\quad %quad
\quad %quad
 & \text{(Gen)} \\
(\forall x)(p\implies t_{j})\implies(p\implies(\forall x)t_{j})\quad %quad
\quad %quad
 & \text{(A7)} \\
p\implies(\forall x)t_{j}\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$
to obtain a proof of $p\implies t_{i}$ from $S$ 

In all cases, it's easy to check that the induction hypothesis before $(i+1)$th step is satisfied. 