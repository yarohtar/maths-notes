# LST
## Knaster-Tarski Fixpoint
Let $X$ be a [[Notes/Complete Poset]] and $f:X\to X$ be order-preserving. 
Then $f$ has a fixed point.
#### Proof
Let $S=\{ x\in X : x\leq f(x)\}$
Let $z=supS$
We show $f(z)=z$
For any $x\in S$ we have $x\leq z$
Then $x\leq f(x)\leq f(z)$ as $f$ is order-preserving
Thus $f(z)$ is an [[Notes/Upper Bound]] for $S$ and so $z\leq f(z)$
It follows that $f(z)\leq f(f(z))$ and so $f(z)\in S$ and $f(z)\leq z$

## Schroder-Bernstein
Let $A,B$ be sets and $f:A\to B$, $g:B\to A$ injective
Then there is a bijection between them.
### Proof
Seek a set $P$ such that:
$$
A\setminus g(B\setminus f(P))=P
$$
Then define
$$
h(x) = \begin{cases}
f(x) & x\in P \\
g^{-1}(x) & \text{otherwise}
\end{cases}
$$
## Transitive closure
Use attempts with unions.
## $\in$ induction
Use $TC(\{ x \})$
## $\in$ recursion
Let $G$ be a [[Notes/Function Class]] defined everywhere.
Then there is a function class $F$ defined everywhere
such that:
$$
(\forall x)(F(x)=G(F|_{x}))
$$
Also $F$ is unique.
Note $F|_{x}$ is the set $\{ (s,F(s)) : s \in x \}$
which is a set by [[Notes/Axiom of Replacement]]
### Proof
Uniqueness by [[Notes/Principle of Epsilon-Induction]]

We say $f$ is an attempt if
- $f$ is a function
- $\operatorname{dom}f$ is transitive
and 
$$
(\forall x)(x\in \operatorname{dom}f \implies f(x)=G(f|_{x}))
$$
Note that $f|_{x}$ makes sense as $\operatorname{dom}f$ is transitive.
Now use $\in$ induction to show two attempts agree on intersection of their domains
Another $\in$ induction shows every set is in domain for some $f$
Then $F$ is defined by
$$
(\exists f)('f \text{ is an attempt}'\land y\in f(x))
$$

## Mostowski
A [[Notes/Relation Class]] $r$ is well-founded if 
every nonempty set has an $r$-minimal member:
$$
(\forall x)(\neg(x=\emptyset) \implies(\exists y)[y\in x\land(\forall z\in x)\neg r(z,y)])
$$

A relation $r$ on a set $a$ is extensional if
members of $a$ are uniquely determined by their $r$-predecessors:
$$
(\forall x\in a)(\forall y\in a)((\forall z\in a)(z\ r\ x \iff z \ r\ y) \implies x=y)
$$

A [[Notes/Relation Class]] $r$ is local if 
the $r$-predecessors of a set form a set:
$$
(\forall x)(\exists y)(\forall z)(z\in y\iff r(z,x))
$$



Let $r$ be [[Notes/Well-Founded]], [[Notes/Extensional]] relation on a set $a$.
(Note that this implies $r$ is [[Notes/Local]])
Then there is a transitive set $b$ and a bijection $f:a\to b$
such that:
$$
(\forall x\in a)(\forall y\in a)(x\ r\ y\iff f(x)\in f(y))
$$
Moreover, the pair $(b,f)$ is unique.
### Note
Similar to [[Notes/Epsilon-recursion Theorem]] and [[Notes/Principle of Epsilon-Induction]] 
we can define the same concepts for $r$ (as well as $r$-closure)
### Proof
Define $f$ by $r$-recursion
$$
(\forall x\in a)(f(x)=\{ f(y) : y\in a, r(y,x) \})
$$
and set $b=\{ f(x):x\in a \}$
Now verify the conditions.
Everything is straightforward except $f$ injective and $(b,f)$ unique
These we verify by $r$ induction.

## Ordinal
An ordinal is a [[Notes/Transitive]] set well ordered by $\in$.
Order types are defined and unique for all sets 
by [[Notes/Mostowski's Collapsing Theorem]]
## Cardinal
Assuming [[Notes/Axiom of Choice]], cardinality of $x$ is 
the smallest ordinal bijecting with $x$
Additionally infinite cardinals are $\aleph_{\alpha}=\omega_{\alpha}$ for $\alpha \in ON$
## $\aleph_{\alpha}\cdot\aleph_{\alpha} =\aleph_{\alpha}$
### Proof
We go by induction on $\alpha$
Note that $\alpha=0$ is trivial as $\omega_{0}\times \omega_{0}$ is countable.

Order $\omega_{\alpha}\times \omega_{\alpha}$ by going up in squares.
Then let $\delta=(x,y)$ for $x,y<\omega_{\alpha}$
We find that in this ordering $\delta\leq(\tau,\tau)$ for $\tau=max\{ \alpha,\beta \}^{+}<\omega_{\alpha}$
Now $\omega_{\alpha}$ is a limit so $\lvert \tau \rvert<\lvert \omega_{\alpha } \rvert$
Then either $\tau$ is finite or $\lvert \tau \rvert=\lvert \tau \times \tau \rvert$ (by induction hypothesis)
Then
$$
\lvert I_{\delta} \rvert \leq \lvert \tau \times \tau \rvert =\lvert \tau \rvert <\lvert \omega_{\alpha} \rvert 
$$
Now every proper initial segment of $\omega_{\alpha}\times \omega_{\alpha}$ has order type $<\omega_{\alpha}$
But order type of $\omega_{\alpha}\times \omega_{\alpha}$ is the supremum of its initial segments
So $\lvert \omega_{\alpha}\times \omega _{\alpha} \rvert \leq \lvert \omega_{\alpha} \rvert$
The other direction is trivial.


# Numerical analysis
[[Notes/Numerical Analysis]]
## Finite difference
$$
\frac{1}{h^2}[g(x-h)-2g(x)+g(x+h)]=g''(x)+\frac{1}{12}h^2g^{(4)}(x)+\frac{1}{360}h^4g^{(6)}(x)+O(h^6)
$$
## Gauss-Scheidel
[[Notes/Iterative Methods for Linear Algebraic Systems]]

Let $A=L_{0}+D+U_{0}$ where they are respectively: lower triangle, diagonal and upper triangle. 
We take $A-B=L_{0}+D$
We obtain the next iteration by solving:
$$
(L_{0}+D)x^{k+1}=-U_{0}x^k+b
$$
So $H_{GS}=-(L_{0}+U)^{-1}U_{0}$

Note that there is no need to calculate the inverse explicitly, 
because we can calculate the components of $x^{k+1}$ by forward substitution.
### Theorem
If $A$ is [[Notes/Strictly diagonally dominant]], then the Gauss-Seidel method converges.
#### Proof
Note $e^{k+1}=He^{k}$ so $e^{k}=H^{k}e^{0}$
Thus we need to prove $\rho(H)<1$
Let $\lambda$ be an eigenvalue of $H$.
Then 
$$
\det(H-\lambda I)=0
$$
$$
\det(U_{0}+\lambda L_{0}+\lambda D) = 0
$$
where the second line is obtained by multiplying by $L_{0}+D$
Let $A_{\lambda}=U_{0}+\lambda L_{0}+\lambda D$
Suppose $\lvert \lambda \rvert\geq 1$
Then $A_{\lambda}$ is also strictly diagonally dominant.
So $A_{\lambda}$ has evals with strictly positive real part by [[Notes/Gershgorin Theorem]].
This is a contradiction, thus $\lvert \lambda \rvert<1$
So $\rho(H)<1$.

### Theorem
If $A$ is symmetric positive definite, then the Gauss-Seidel method converges.
#### Proof
$H=-(A-U_{0})^{-1}U_{0}$
Note $A-U_{0}-U_{0}^{T}=D$ 
Now $D$ is also symmetric positive definite as $e_{i}^{T}Ae_{i}>0$
Use [[Notes/The Householder-John Theorem]] to find $\rho(H)<1$


## Jacobi
[[Notes/Iterative Methods for Linear Algebraic Systems]]
Let $A=L_{0}+D+U_{0}$ where they are respectively: lower triangle, diagonal and upper triangle. 
Set $A-B=D$
We obtain the next iteration by solving
$$
Dx^{k+1}=-(L_{0}+U_{0})x^{k}+b
$$
so $H_{J}=-D^{-1}(L_{0}+U_{0})$

### Theorem
If $A$ is [[Notes/Strictly diagonally dominant]], then the Jacobi method converges.
#### Proof
Note $e^{k+1}=He^{k}$ so $e^{k}=H^{k}e^{0}$
Thus we need to prove $\rho(H)<1$
Let $\lambda$ be an eigenvalue of $H$.
Then 
$$
\det(H-\lambda I)=0
$$
$$
\det(L_{0}+U_{0}+\lambda D) = 0
$$
where the second line is obtained by multiplying by $D$
Let $A_{\lambda}=L_{0}+U_{0}+\lambda D$
Suppose $\lvert \lambda \rvert\geq 1$
Then $A_{\lambda}$ is also strictly diagonally dominant.
So $A_{\lambda}$ has evals with strictly positive real part by [[Notes/Gershgorin Theorem]].
This is a contradiction, thus $\lvert \lambda \rvert<1$
So $\rho(H)<1$.
### Theorem
If both $A$ and $2D-A$ are symmetric positive definite, then Jacobi method converges
#### Proof
$H=-D^{-1}(L_{0}+U_{0})=-(A-L_{0}-U_{0})(L_{0}+U_{0})$ 
So setting $B=L_{0}+U_{0}$ we find $A-B-B^{T}=2D-A$
Now use [[Notes/The Householder-John Theorem]] to find $\rho(H)<1$

### Householder-John
Let $A$ and $B$ are real matrices such that 
both $A$ and $A-B-B^T$ are symmetric positive definite.
Define $H=-(A-B)^{-1}B$.
Then $\rho(H) < 1$
### Proof
Key point is, for complex $w$ and positive definite $C$ it still holds:
$$
w^{\dagger}Cw>0
$$
Then just apply this to $A-B-B^{T}$ and do some algebra
## Conjugate gradient
[[Notes/Iterative Methods for Linear Algebraic Systems]]
[[Notes/Exact Line Search]]
## Theorem
Let $d^{0},d^{1},\dots,d^{n-1}$ be $n$ [[Notes/Conjugate Directions]]
and consider the sequence of iterates:
$$
x^{k+1}= x^{k} + \alpha_{k} d^{k}
$$
where 
$$
\alpha_{k} = \frac{(r^{k},d^{k})}{(d^{k},Ad^{k})}
$$
Then $r^{k}$ is orthogonal to $d^{0},\dots,d^{k-1}$.
In particular $r^{n}=0$.
#### Proof
Nothing special, just check.

# The method
See [[Notes/Standard Conjugate Gradient Method]] for the optimized algorithm.
### Initial conditions
For any initial $x^{0}$, set $d^{0}=r^{0}=b-Ax^{0}$
### Iterate
For $k\geq 0$ find $x^{k+1}$ and $r^{k+1}$ by the usual formula (above)
### Next direction
The next conjugate direction is:
$$
d^{k+1} = r^{k+1} +\beta_{k} d^{k}
$$
with
$$
\beta_{k} = - \frac{(r^{k+1},Ad^{k})}{(d^{k},Ad^{k})}
$$
i.e. the value that makes $d^{k+1}$ normal to $Ad^{k}$
## Theorem (properties)
For every $m\geq 0$, the conjugate gradient satisfies:
1. For every $k$:
$$
\operatorname{span}\{ r_{i} : i<k\}=\operatorname{span}\{ d_{i} : i<k\}=\operatorname{span}\{ A^{i}r^{0}:i<k \}
$$
2. For $i<k$, we have orthogonality conditions:
$$
(r^{k},r^{i})=(r^{k},d^{i}) = 0
$$
3. The directions are conjugate, for $i<k$:
$$
(d^{k},d^{i})_{A} = 0
$$
### Proof
Prove all three claims by one induction on $k$.
## Corollary (simplification)
$$
\alpha_{k} = \frac{\lVert r^{k} \rVert^{2} }{(d^{k},Ad^{k})}
$$
Also $Ad^{k}$ is a multiple of $r^{k+1}-r^{k}$ so:
$$
\beta_{k} = -\frac{(r^{k+1},r^{k+1}-r^{k})}{(d^{k},r^{k+1}-r^{k})} =  \frac{\lVert r^{k+1} \rVert ^{2}}{\lVert r^{k} \rVert ^{2}}
$$
## Corollary (number of iterations)
Let $s$ be the number of distinct eigenvalues of $A$
Then the method terminates in at most $s$ steps.
### Proof
[[Notes/The Krylov Subspaces]]

# Preconditioning
The method converges the fastest if the [[Notes/Condition Number]] is close to $1$
To that end, we introduce a change of variables $x=P^{T}\hat{x}$,
where $P$ is some nonsingular preconditioner. 
We now solve:
$$
PAP^{T}\hat{x}=Pb
$$
Note that similarity transformations preserve the spectrum so:
$$
\kappa(PAP^{T}) = \kappa(P^{-1}PAP^{T}P) = \kappa(AP^{T}P)
$$
Now if $S$ is an approximation to $A$ such that $S=QQ^{T}$ we can set $P=Q^{-1}$ 
Let $A$ be a matrix, $v$ nonzero vector and $m\in \mathbb{N}$
We define the Krylov subspace as:
$$
K_{m}(A,v) = \operatorname{span}\{ A^{i}v : 0\leq i<m \}
$$
## Lemma
Let $A$ have $s$ distinct eigenvalues.
Then for any $v$ and any $m$:
$$
\operatorname{dim} K_{m}(A,v) \leq s
$$
### Proof
Expand $v$ in the eigenbasis 
and then group together vectors with the same eigenvalue.



## Eigenvalues
### Inverse
Given some $s$, we set:
$$
(A-sI) x^{k+1}=x^{k}
$$
This converges to an eigenvector with eigenvalue closest to $s$
We can make it faster by adjusting $s$ throughout the iteration
Take $s ^{k+1}$ to be the minimizer of $f(s)=\lVert Ax^{k+1} - s ^{k+1} x^{k+1} \rVert$

Note that we will need [[Notes/LU factorisation]] of $A$
This is very efficient if $A$ is [[Notes/Upper Heisenberg]]

We can bring $A$ in this form using [[Notes/Givens Rotation]] or [[Notes/Householder Reflection]]

### QR
Set $A_{0}=A=Q_{0}R_{0}$ [[Notes/QR factorisation]]
Then iterate as:
$$
A_{k+1} = R_{k}Q_{k} = Q_{k+1}R_{k+1}
$$
Set
$$
\bar{Q}_{k} = Q_{0}Q_{1}\dots Q_{k}
$$
and 
$$
\bar{R}_{k} = R_{k}R_{k-1}\dots R_{0}
$$
Then 
$$
A_{k+1}=\bar{Q}^{T}_{k} A \bar{Q}_{k}
$$
$$
A^{k+1} = \bar{Q}_{k}\bar{R}_{k}
$$
The first column of $A^{k+1}$ is related to [[Notes/Power Method for Finding Eigenvalues]] 
The last row of $A^{k+1}$ is related to [[Notes/Inverse Iteration for Finding Eigenvalues]]


# Asymptotic
## $\Gamma$ function
The Gamma function is an analytic way to represent factorials.
$$
\Gamma(\xi)=\int_{0}^\infty t^{\xi-1}e^{-t}dt
$$
This is analytic for $\mathrm{Re}(\xi)>0$.
It satisfies the functional equation:
$$
z\Gamma(z)=\Gamma(z+1)
$$
(as expected)
Also $\Gamma(1)=1$ so $\Gamma(n+1)=n!$ for $n\in \mathbb{N}$
For $x>0$, by simple substitution we find:
$$
\int_{0}^\infty t^{\xi-1}e^{-xt}dt=\frac{\Gamma(\xi)}{x^{\xi}}
$$
### Reflexion formula
$$
\Gamma(z)\Gamma(1-z)= \frac{\pi}{\sin \pi z}
$$
### Duplication formula
$$
\Gamma(z)\Gamma\left( z+\frac{1}{2} \right) = 2^{1-2z} \sqrt{ \pi } \Gamma(2z)
$$
### Useful integral
For $\mathrm{Re}(a)>0$ and $p>0$:
$$
\int_{0}^{\infty} e^{-ax^{p}}dx = a^{-1 /p} \Gamma\left( 1+ \frac{1}{p} \right)
$$
### Binomial coefficient
$$
{\xi \choose k}=\frac{1}{k!} \frac{\Gamma(\xi+1)}{\Gamma(\xi-k+1)} 
$$
It also works with:
$$
(1+t)^{\xi}=\sum_{k=0}^{\infty}{\xi \choose k}t$$




## Watson's lemma
[[Notes/Watson's lemma]]
Consider 
$$
F(x)=\int_{0}^Tf(t)e^{-xt}dt
$$
Suppose 
$$
f(t)\sim t^\alpha \sum_{n=0}^{\infty}a_{n}t^{n\beta} \quad %quad
\text{ as } \quad %quad
t\to 0^{+}
$$
with $\alpha>-1$ and $\beta>0$
Suppose also either: 
- $\lvert f(t) \rvert<Ke^{bt}$ for all $t>0$ and some $K,b>0$
OR
- $\int _0^T\lvert f(t) \rvert dt<\infty$
Then we have the [[Notes/Asymptotic Approximation]]
$$
F(x)\sim \sum_{n=0}^{\infty} a_{n} \frac{\Gamma(\alpha+\beta n+1)}{x^{\alpha+\beta n+1}}
$$

## Laplace Method
[[Notes/Laplace Method]]
$$
F(x) = \int_{a}^{b} f(t)e^{x\phi(t)} dt
$$
### The method
1. Draw picture
2. Find GLOBAL maxima
3. Around each max, write a taylor expansion
$$
x\phi(t) \sim x\phi(c) + xA_{p}(t-c)^{p} + xA_{p+1}(t-c)^{p+1} + \dots
$$
4. Use substitution $t=c+x^{-1/p}u$
5. Use integrals below
### Integrals
$$
\int_{0}^{\infty} u^{n} e^{-Au^{p}} du = \frac{A^{-(n+1)/p}}{p} \Gamma\left( \frac{n+1}{p} \right)
$$
$$
\int_{-\infty}^{\infty} u^{2m} e^{-Au^{2q}} du = \frac{A^{-(2m+1)/(2q)}}{q} \Gamma\left( \frac{2m+1}{2q} \right)
$$
$$
\int_{-\infty}^{\infty} u^{2m+1} e^{-Au^{2q}}du = 0
$$
## Stationary phase
### Monotonic
$$
\int_{a}^{b} f(t) e^{ix\phi(t)}dt
$$
If $\phi$ is monotonic on this interval 
then we need to do partial integration
First use $u=\phi(t)$ and then partial integrate.

Note that in this case we do not Taylor expand anything 
but use
#### Riemann-Lebesgue Lemma
$$
F(x) = \int_{a}^{b} e^{ixt} f(t) dt \to 0
$$
as $x\to \infty$ provided that $\int_{a}^{b}\lvert f \rvert dt<\infty$

### Stationary points
All stationary points contribute $O\left( \frac{1}{\sqrt{ x }} \right)$
Use similar stuff as in Laplace

## Steepest descent
[[Notes/Method of Steepest Descent]]
Curves of constant $v$ are curves of rapidly decreasing $u$
We deform the integration contour to go along these curves 
and only take contributions from points where $\phi'(x+iy)=0$
We Taylor expand $u$ and $v$ around these points if needed.
It is also useful to identify regions where $u\to-\infty$ 
when $x^{2}+y^{2}\to \infty$ 
because we can deform the contour freely there

## Liouville-Green / WKBJ
$$
(S_{0}')^{2}=q
$$
$$
S_{1}'=-\frac{1}{4q}
$$
### Connection criterion
$$
\frac{1}{\epsilon}\int_{a}^{b}\sqrt{ \lvert q \rvert  } = \left( n+\frac{1}{2} \right)\pi
$$
# Automata
[[Notes/Automata and formal languages]]
## Language equations
Let $L$ and $M$ be languages over $\Sigma$
Consider the equation 
$$
X=LX\cup M
$$
1. The language $L^{*}M$ is a solution to this equation
2. If $Z$ is a solution to this equation then $L^{*}M\subseteq Z$
3. If $\epsilon \not\in L$ then $L^{*}M$ is the unique solution to this equation.
### Use
Useful to solve stuff like 
$$
\{ S\to 2S,S\to 2A,A\to 0A,A\to 0B, B\to 1B, B\to 1 \}
$$
We find that $B=1^{+}$
Then $A=0A\cup 01^{+}$ so $A=0^{*}01^{+}=0^{+}1^{+}$
Then $S=2S\cup 2A$ so $S=2^{*}20^{+}1^{+}=2^{+}0^{+}1^{+}$
## Regular pumping
For $\lvert w \rvert\geq n$ there are $w=xyz$ with $\lvert y \rvert>0$ s.t. $xy^{k}z\in L$ 
## Context free pumping
For $\lvert w \rvert\geq n$ there are $w=xuyvz$ with $\lvert uv \rvert>0$ and $\lvert uyv \rvert \leq n$ 
such that $xu^{k}yv^{k}z\in L$

## Fixpoints
Let $\varphi:\mathbb{B}\dashrightarrow \mathbb{B}$ and $w\in \mathbb{B}$
We call $w$ a fixed point of $\varphi$ if $f_{\varphi(w),1}=f_{w,1}$ 
(using notation from [[Notes/The Software Principle]])
### Theorem
If $\varphi:\mathbb{B}\to \mathbb{B}$ is total, then $\varphi$ has a fixed point. 
### Proof
Consider the [[Notes/Partial Function]] 
$$
g(u,v) = \begin{cases}
f_{f_{u,1}(u),1}(v) & \text{if } u\in K \\
\uparrow & \text{otherwise}
\end{cases}
$$
Apply [[Notes/The s-m-n Theorem]] to find a total function $h$
such that:
$$
f_{h(u)}(v) = \begin{cases}
f_{f_{u,1}(u),1}(v)  &  \text{if } u\in K  \\
\uparrow & \text{otherwise}
\end{cases}
$$
Now consider $e$ such that $f_{e,1}=\phi \circ h$
Note $f_{e,1}(e)=\phi(h(e))$ so $e\in K$
Let $w=h(e)$
Then
$$
f_{\phi(w),1} = f_{f_{e,1}(e),1} = f_{h(e),1} = f_{w,1}
$$
Thus $w$ is a fixpoint
## Primitive recursive
Suppose $f:\mathbb{N}^{k}\dashrightarrow \mathbb{N}$, $g:\mathbb{N}^{k+2}\dashrightarrow \mathbb{N}$ and $g_{1},\dots,g_{k}:\mathbb{N}^{l}\dashrightarrow \mathbb{N}$ are [[Notes/Partial Numerical Function]]s.

The partial numerical function $c$ defined by
$$
c(\vec{n})=f(g_{1}(\vec{n}),\dots,g_{k}(\vec{n}))
$$
is called the composition of $f$ with $(g_{1},\dots,g_{k})$

The partial numerical function $r$ defined by
$$
r(\vec{n},0)=f(\vec{n})
$$
$$
r(\vec{n},m+1)=g(\vec{n},m,r(\vec{n},m))
$$
is called the recursion of $f$ and $g$

### Definition
The class of primitive recursive functions is 
the smallest class of partial functions containing all [[Notes/Basic Functions]] 
that is closed under composition and recursion.

### Theorem
Every primitive recursive function is [[Notes/Computable]].

Given $f:\mathbb{B}^{k+1}\dashrightarrow \mathbb{B}$, a partial function, define:
$$
h(\vec{w})=\begin{cases}
v  &  \text{if for all }\#u\leq\#v, \text{ have }f(\vec{w},u)\downarrow \text{ and } \\
 & v \text{ is shortlex-minimal such that } f(\vec{w},v)=\epsilon \\
\uparrow & \text{otherwise}  
\end{cases}
$$
the minimisation of $f$. 

Partial recursive functions are the closure of 
[[Notes/Gödel's primitive recursive functions]] 
under the operation of minimisation.


## smn applications
Things to consider:
$$
g(u,v) = \begin{cases}
f_{f_{u}(u)}(v)  &  u\in K \\
\uparrow & \text{otherwise}
\end{cases}
$$
$$
g(u,v) = \begin{cases}
1 & u\in K \\
\uparrow & \text{otherwise}
\end{cases}
$$
$$
g(u,v)=\begin{cases}
f_{u}(v) & u=v \\
\uparrow & \text{otherwise}
\end{cases}
$$
$$
g_{w}(u,v) = \begin{cases}
f_{w}(v) & u\in K \\
\uparrow & \text{otherwise}
\end{cases}
$$
$$
g(u,v) = \begin{cases}
1 & \text{if }f_{u}(u) \text{ doesn't halt in }\#v\text{ steps} \\
\uparrow & \text{otherwise}
\end{cases}
$$
$$
g(u,v) = \begin{cases}
1 & \text{if }f_{u}(u) \text{ halts in }\#v\text{ steps} \\
\uparrow & \text{otherwise}
\end{cases}
$$
$$
g(u,v) = \begin{cases}
1  & \text{if for some }w\text{ and some }p,q<w, f_{u}(p) \text{ halts in }\#q \text{ steps}  \\
\uparrow & \text{otherwise}
\end{cases}
$$
and other similar things
## Index sets
Let $L,L'\subseteq \mathbb{B}$. 
A total [[Notes/Computable]] function $f:\mathbb{B}\to \mathbb{B}$ is a reduction from $L$ to $L'$ if for all $w\in \mathbb{B}$ we have:
$$
w \in L \iff f(w) \in L'
$$
We also say that $L$ is many-to-one reducible to $L'$.
We write $L\leq_{m} L'$
Note that $\leq_{m}$ is a [[Notes/Partial Preorder]]

The following proposition says that $L$ is at most as complicated as $L'$ (in the computability sense).
### Proposition
If $L\leq_{m} L'$ and $L'$ is [[Notes/Computable]], then so is $L$.
If $L\leq_{m}L'$ and $L'$ is [[Notes/Computably Enumerable]], then so is $L$.


# Coding and Cryptography
[[Notes/Coding and Cryptography]]
## Gibbs'
$$
-\sum p_{i}\log p_{i} \leq - \sum p_{i}\log q_{i}
$$
### Proof
Use $\ln x\leq x-1$ with equality iff $x=1$ on $x=\frac{p_{i}}{q_{i}}$
## Kraft
$$
\sum_{i=1}^{m}a^{-s_{i}}\leq 1
$$
### Proof
Consider an $\infty$ tree with labels from $\Sigma_{2}$
## McMillan
Decipherable codes satisfy Kraft
### Proof
Let $r\in \mathbb{N}$
Let $b_{l}$ be the number of ways to choose $r$ codewords with total length $l$
Then $b_{l}\leq a^{l}$
Also
$$
\left( \sum a^{-s_{i}} \right)^{r} = \sum_{l=1}^{rs} b_{l} a^{-l}\leq rs
$$
## Shannon
$$
\frac{H(X)}{\log a} \leq E(S)\leq \frac{H(X)}{\log a} + 1
$$
### Proof
#### Upper bound
Set $s_{i}=\lceil -\log p_{i} \rceil$ and find codewords greedily
### Lower bound
Apply Gibbs for $q_{i}=\frac{a^{-s_{i}}}{C}$ where $C=\sum a^{-s_{i}}\leq 1$ by Kraft

## Noisy coding
### Binary code
$[n,m,d]$ code has wordlength $n$ and $m$ words with minimm distance $d$
Information rate is 
$$
\rho(C)=\frac{\log m}{n}
$$
### Hamming bound
$$
\lvert C \rvert  \leq \frac{2^{n}}{\lvert V(n,e) \rvert }
$$
### GSV bound
$$
\frac{2^{n}}{\lvert V(n,d-1) \rvert } \leq \lvert C \rvert 
$$
## Linear codes
### Parity check matrix
An $(n,k)$ [[Notes/Linear Code]] with [[Notes/Generator Matrix]] $G=(I_{k}|B)$ 
has parity check matrix $H=(-B^{T}|I_{n-k})$
### Syndrome
Let $C$ be a $(n,r)$ [[Notes/Linear Code]] with [[Notes/Parity Check Matrix]] $H$ 
Suppose we receive $x$ 
We form the [[Notes/Syndrome]] $Hx$

Suppose we know $C$ is $e$ [[Notes/Error correcting]]
We tabulate the syndrome $Hz$ for all $z\in \mathbb{F}_{2}^{n}$ with $w(z)\leq e$
We search for $Hx$ in this list
If successful, we decode $x$ as $c=x-z$
Otherwise, we know that there was more than $e$ mistakes.


### Hamming codes
Codes with parity check matrix whose columns are 
all elements of $\mathbb{F}_{2}^{n}$
### Reed Muller
Let $C_{1}$, $C_{2}$ be [[Notes/Linear Code]] of length $n$ with $C_{2}\subseteq C_{1}$ 
The bar product is:
$$
C_{1}\mid C_{2}=\{ (x\mid x+y):x\in C_{1}, y\in C_{2} \}
$$
It is a linear code of length $2n$.
Note that $\mid$ here represents CONCATENATION.
### Lemma
1. $\operatorname{rank}(C_{1}\mid C_{2})=\operatorname{rank}(C_{1})+\operatorname{rank}(C_{2})$
2. $w(C_{1}\mid C_{2})=\min\{ 2w(C_{1}),w(C_{2}) \}$
#### Proof
1. Let $x_{1}\dots x_{k}$ be a basis for $C_{1}$. Let $y_{1}\dots y_{l}$ be a basis for $C_{2}$.
   Then $\{ (x_{i}\mid x_{i}) \}\cup \{ (0\mid y_{i}) \}$ is a basis for $C_{1}\mid C_{2}$
   Hence $\operatorname{rank}(C_{1}\mid C_{2})=\operatorname{rank}(C_{1})+\operatorname{rank}(C_{2})$
2. Let $x\in C_{1}$ and $y\in C_{2}$, not both zero 
   if $y\neq 0$, $w(x\mid x+y)=w(x)+w(x+y)\geq w(y)\geq w(C_{2})$
   if $y=0$ then $w(x\mid x)\geq 2w(x)\geq 2w(C_{1})$
   So $w(C_{1}\mid C_{2})\geq min\{ 2w(C_{1}),w(C_{2}) \}$
   But the minimums are achieved so this is equal 


$RM(d,r)$ is defined as the space spanned by 
$v_{0}=(1,1,\dots,1)^{T}$ and a wedge product of at most $r$ of $v_{i}$
where $v_{i}=\mathbb{1}_{H_{i}}$ where $H_{i}=\{ p \in \mathbb{F}_{2}^{d} : p_{i}=0 \}$
Note the length is $2^{d}$
#### Theorem
1. The vector $v_{i_{1}}\wedge\dots \wedge v_{i_{s}}$ for $1\leq i_{1}<\dots<i_{s}\leq d$ and $0\leq s\leq d$ are a basis for $\mathbb{F}_{2}^{n}$
2. $RM(d,r)$ has rank $\sum_{s=0}^{r}{d \choose s}$
3. $RM(d,r)=RM(d-1,r)\mid RM(d-1,r-1)$ [[Notes/The Bar Product]]
4. $RM(d,r)$ has weight $2^{d-r}$
### BCH codes
Let $n$ be odd.
Let $K$ be a field extension of $\mathbb{F}_{2}$ containing all $n^{th}$ roots 
of unity $\{ 1, \alpha, \alpha^{2},\dots,\alpha^{n-1} \}$ (e.g. $K=\mathbb{F}_{2^{r}}$ for $2^{r}=1\pmod{n}$)
A BCH code with design distance $\delta$
is a [[Notes/Cyclic Code with Defining Set]] $A=\{ \alpha,\alpha^{2},\dots,\alpha^{\delta-1} \}$
### Lemma
The generator $g(X)$ for BCH code $C$ is 
$$
\operatorname{lcm} \{ m_{1}(X), \dots, m_{\delta-1}(X) \}
$$
where $m_{i}(X)$ is the minimal polynomial for $\alpha^{i}$ over $\mathbb{F}_{2}$
### Theorem
The [[Notes/Minimum distance of a code]] for BCH code is at least the design distance $\delta$.
#### Proof
Consider the matrix:
$$
H=\begin{pmatrix}
1 & \alpha & \alpha^{2} & \dots & \alpha^{n-1} \\
1 & \alpha^{2} & \alpha^{4} & \dots & \alpha^{2(n-1)} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & \alpha^{\delta-1} & \alpha^{2(\delta-1)} & \dots & \alpha^{(\delta-1)(n-1)}
\end{pmatrix}
$$
Taking any $\delta-1$ columns, gives a [[Notes/Vandermonde matrix]], 
so any $\delta-1$ columns of $H$ are linearly independent.
But a codeword in $C$ is a dependence relation 
between the columns of $H$ so $w(C)\geq\delta$

Note that $H$ is not the [[Notes/Parity Check Matrix]] 
in the usual sense, because $\alpha \not\in \mathbb{F}_{2}$
# Decoding
Suppose we receive $r=c\oplus e$ where $e$ is the error pattern
### Definition
The error locator polynomial of an error pattern $e\in \mathbb{F}_{2}^{n}$ is
$$
\sigma(X)=\prod_{i\in \mathcal{E}}(1-\alpha^{i}X)\in K[X]
$$
where $\mathcal{E}=\{ i: e_{i}=1 \}$.
### Theorem
Suppose $\operatorname{deg}\sigma=\lvert \mathcal{E} \rvert\leq t$ where $2t+1\leq\delta$.
$\sigma(X)$ has constant term $1$ and satisfies:
$$
\sigma(X)\sum_{j=1}^{2t} r(\alpha^{j})X^{j}=w(X) \pmod{X^{2t+1}}
$$
where $w(X)$ is a polynomial of degree $\leq t$.
Moreover, $\sigma(X)$ is the unique polynomial of least degree 
satisfying the above.
#### Proof
Let
$$
w(X)=-X\sigma'(X)=\sum_{i\in \mathcal{E}}\alpha^{i}X\prod_{j\in \mathcal{E}\setminus \{ i \}}(1-\alpha^{j}X)
$$
So $w(X)$ is a polynomial of degree equal to $\operatorname{deg}\sigma$
We work in $K[[X]]$ the ring of formal power series.
Note:
$$
\frac{1}{1-\alpha^{i}X}=\sum_{n=0}^{\infty}(\alpha^{i}X)^{n}\in K[[X]]
$$
So:
$$
\begin{align}
\frac{w(X)}{\sigma(X)} &= \sum_{i\in \mathcal{E}} \frac{\alpha^{i}X}{1-\alpha^{i}X}  \\
 &= \sum_{i\in \mathcal{E}}\sum_{j=1}^{\infty}(\alpha^{i}X)^{j} \\
 & =\sum_{j=1}^{\infty}\sum_{i\in \mathcal{E}} (\alpha^{i}X)^{j} \\
 & =\sum_{j=1}^{\infty}X^{j}e(\alpha^{j})
\end{align}
$$
Thus we find:
$$
w(X)=\sigma(X)\sum_{j=1}^{\infty} e(\alpha^{j})X^{j}
$$
By definition, $c(\alpha^{j})=0$ for $1\leq j\leq\delta-1$
so for $1\leq j\leq 2t$. So $r(\alpha^{j})=e(\alpha^{j})$ for $1\leq j\leq 2t$
Thus
$$
\sigma(X)\sum_{j=1}^{2t}r(\alpha^{j})X^{j}=w(X)\pmod{X^{2t+1}}
$$
Also $\operatorname{deg}w(X)=\operatorname{deg}\sigma(X)\leq t$

To show uniqueness, note $\sigma(X)$ has distinct nonzero roots,
so $\sigma(X)$ and $w(X)=-X\sigma'(X)$ are coprime.
Suppose $\tilde{\sigma}$ and $\tilde{w}$ are another pair of solutions.
WLOG $\operatorname{deg}\tilde{\sigma}\leq \operatorname{deg}\sigma$
Then 
$$
\sigma(X)\tilde{w}(X) = \tilde{\sigma}(X) w(X)\pmod{X^{2t+1}}
$$
But all have degree $\leq t$ so we actually have equality.
As they don't share any roots it has to be $\sigma=\tilde{\sigma}$ (and $w=\tilde{w}$)
### Application
Taking coefficients of $X^{i}$ for $t+1\leq i\leq 2t$ 
allows us to solve for the coeffs of $\sigma(X)$.
Then 
$$
\mathcal{E}=\{ 0\leq i\leq n-1 : \sigma(\alpha^{-i})=0\}
$$
This determines $e$ and we decode as $r\oplus e$.


## Information theory
### Entropy
$$
H(X,Y) = H(X|Y) + H(Y)
$$
$X$ and $Y$ are random variables taking values in $\Sigma$, $\lvert \Sigma \rvert=m$
Let $p=P(X\neq Y)$
then
$$
H(X|Y)\leq H(p)+p\log(m-1)
$$

#### Proof
Let 
$$
Z=\begin{cases}
1 & \text{if }X\neq Y \\
0 & if X=Y 
\end{cases}
$$
$P(Z=1)=p$ and $P(Z=0)=1-p$
By [[Notes/Conditional Entropy]]
$$
H(X|Y)\leq H(X|Y,Z)+H(Z)=H(X|Y,Z)+H(p)
$$
Now:
$H(X|Y=y,Z=0)=0$
$H(X|Y=y,Z=1)\leq \log(m-1)$ since $m-1$ choices for $X$ remain.
So:
$$
\begin{align}
H(X|Y,Z) & =\sum_{y,z}P(Y=y,Z=z)H(X|Y=y,Z=z) \\
 & \leq \sum_{y}P(Y=y,Z=1)\log(m-1) \\
 & =P(Z=1)\log(m-1) \\
 & =p\log(m-1)
\end{align}

$$


### Mutual information
$$
I(X;Y) = H(X) - H(X|Y)
$$
$H(X)$ measures how much we don't know about $X$
$H(X|Y)$ measures how much we don't know about $X$ if we know $Y$
$I(X;Y)$ is the knowledge gained about $X$ given $Y$

### Info capacity (for calculations)
Consider a [[Notes/Discrete Memoryless Channel (DMC)]] 
Let $X$ take values in $\Sigma_{1}$ where $\lvert \Sigma_{1} \rvert=m$ with probabilities $p_{1},\dots ,p_{m}$
Let $Y$ be a random variable output when channel is given input $X$ 
The information channel capacity is 
$$
\max_{X} I(X;Y)
$$
(where $I$ is [[Notes/Mutual Information]])
(max is obtained since it is a continuous function on a compact set)



### Operational channel capacity
Supremum over all reliable transmittion rates
A [[Notes/Communication Channel]] can transmit reliably at rate $R$ if 
there is a sequence of [[Notes/Binary Code]]s $C_{1},C_{2},\dots$ 
where $C_{n}$ is a code of length $n$ and size $\lfloor 2^{nR} \rfloor$ 
(i.e. they have [[Notes/Information Rate]] $\lim_{n\to \infty}\rho(C_{n})=R$)
such that [[Notes/Maximum Error Probability]]
$$
\hat{e}(C_{n})\to 0 \quad %quad
\text{as}\quad %quad
 n\to \infty
$$

For a [[Notes/Binary Code]] $C$, we define
$$
\hat{e}(C)=\max_{c\in C}P(\text{error}|c \text{ sent})
$$
the maximum error probability.

Note that this is the error of decoding wrong, not the error of the [[Notes/Communication Channel]].

## Cryptography
### Equivocation
Any cryptoword will reveal at least as much about the message 
as about the key, i.e. 
$$
H(M|C) \leq H(K|C)
$$
### Unicity distance
$U$ is the least $n$ such that 
$$
H(K|C^{(n)}) = 0
$$
Can calculate:
$$
H(K|C^{(n)}) = H(K) + H(M^{(n)}) - H(C^{(n)})
$$
### Cryptosystems
The private key are two large distinct primes $p,q\equiv 3\pmod{4}$
The public key is $N=pq$ with $\mathcal{M}=\mathcal{C}=\{ 1,\dots N-1 \}$
We encrypt $m\in \mathcal{M}$ as $c=m^{2}\pmod{N}$
We restrict $(m,N)=1$ and at least $m>\sqrt{ N }$
Given $c$, we can solve for $x_{1}^{2}=c\pmod{p}$ and $x_{2}^{2}=c\pmod{q}$
We find $m$ by [[Notes/Chinese Remainder Theorem]]
We can get $4$ solutions out of this, but hopefully only one makes sense.
Suppose $N=pq$ where $p,q$ are distinct odd primes.
Choose some encrypting exponent $e$ such that $(e,\phi(N))=1$
By Euclid, find $d,k$ such that $de-k\phi(N)=1$
Call $d$ the decrypting exponent.
The public key is $(N,e)$
We encrypt $m\in \mathcal{M}$ as $c=m^{e}\pmod{N}$
The private key is $(N,d)$ and we decrypt $c\in \mathcal{C}$ as $x=c^{d}\pmod{N}$
Then
$x=m^{de}=m^{1+k\phi(N)}=m\pmod{N}$
### Theorem
Suppose we know some $m=k\phi(N)$
Write $o_{p}(x)$ for order of $x$ in $(\mathbb{Z}_{p})^{\times}$
Write $m=2^{a}b$ where $a\geq 1$ and $b$ is odd
Let 
$$
X=\{ x\in(\mathbb{Z}_{p})^{\times}: o_{p}(x^{b})\neq o_{q}(x^{b}) \}
$$
1. If $x\in X$, then there is some $0\leq t<a$ such that $(x^{2^{t}b}-1,N)$ 
   is nontrivial factor of $N$
2. $\lvert X \rvert\geq \frac{1}{2}(p-1)(q-1)$
### Corollary
Finding the private key $(N,d)$ is essentially as difficult as factoring $N$


### Elgamal scheme
Alice chooses a large prime $p$ and a random integer $1<u<p$
Let $g$ be a primitive root $\pmod{p}$.
The public key is $p,g,y=g^{u}\pmod{p}$
The private key is $u$
Let $h:\mathcal{M}\to \{ 1,\dots,p-1 \}$ be a hash function
To send a message $m$ with $0\leq m\leq p-1$, 
Alice randomly chooses $k$ with $1\leq k\leq p-2$ coprime to $p-1$
She computes $r,s$ with $1\leq r\leq p-1$ and $1\leq s\leq p-2$ 
satisfying:
$$
r=g^{k}\pmod{p}
$$
$$
h(m)=ur+ks\pmod{p-1}
$$
Since $k$ is coprime to $p-1$, we can always find $s$.
Alice signs the message with $(r,s)$
Now:
$$
g^{h(m)}=g^{ur+ks}=(g^{u})^{r}(g^{k})^{s}=y^{r}r^{s}\pmod{p}
$$
so Bob accepts a signature if $g^{h(m)}=y^{r}r^{s}\pmod{p}$
Any obvious attempt at forging involves the discrete log




# QIC
[[Notes/Quantum Information and Computing]]
## Distinguishing states
You are given a quantum system in unknown state $\ket{\psi}$
You are told $\ket{\psi}$ is either in $\ket{\alpha_{0}}$ or $\ket{\alpha_{1}}$ with probability $\frac{1}{2}$
and $\lvert \braket{ \alpha_{0} | \alpha_{1} } \rvert=\cos \theta$
The probability $p$ of correctly identifying the state 
by ANY measurement satisfies $p\leq \frac{1}{2}+ \frac{\sin \theta}{2}$
This bound is TIGHT 

### Proof
Do a 2-outcome measurement
Probability of success

$$
\begin{align}
p\left(\Pi_{0} \right) & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}(\ket{\alpha_{0}} \bra{\alpha_{0}} -\ket{\alpha_{1}} \bra{\alpha_{1}} )) \\
 & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}\Delta)
\end{align}
$$
Properties 
$\Delta ^{\dagger}=\Delta$
$\ket{\beta}\in \mathcal{H}$ s.t. $\braket{ \beta | \alpha_{0} }=0=\braket{ \beta | \alpha_{1} }$
then $\Delta \ket{\beta}=0$
So $\Delta$ only acts nontrivially on $v=span\{ \ket{\alpha_{0}},\ket{\alpha_{1}} \}$
$Tr\Delta=0$ so eigenvalues are $+\delta$ and $-\delta$
Let corresponding eigenvalues be $\ket{p},\ket{m}$ and $P_{\delta}=\ket{p}\bra{p}$ and $P_{-\delta}=\ket{m}\bra{m}$
Spectral decomposition: $\Delta=\delta P_{\delta}-\delta P_{-\delta}$
Determine $\delta$ in terms of $\ket{\alpha_{0}}$, $\ket{\alpha_{1}}$
Let $\ket{\alpha_{0}^{\bot}}\in v$ ??????
$\ket{\alpha_{1}}=c_{0}\ket{\alpha_{0}}+c_{1}\ket{\alpha_{0}^{\bot}}$
Write $\Delta$ in this basis
$$
\Delta=\begin{pmatrix}
\lvert c_{1} \rvert ^{2} & -c_{0}c_{1}^{*} \\
-c_{0}^{*}c_{1} & -\lvert c_{1} \rvert ^{2}
\end{pmatrix}
$$
and we find the eigen values are $\delta=\lvert c_{1} \rvert$

Let $\ket{\alpha_{0}}$ and $\ket{\alpha_{1}}$ be such that
$$
0<\braket{ \alpha_{0} | \alpha_{1} }<1
$$
Then $\lvert \braket{ \alpha_{0} | \alpha_{1} } \rvert=\cos \theta$ for some $0<\theta<\frac{\pi}{2}$
with $\lvert c_{0} \rvert=\cos \theta$, $\lvert c_{1} \rvert=\sin \theta$

$$
\begin{align}
p(\Pi_{0}) & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}\Delta) \\
 & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}(\delta \ket{p} \bra{p} -\delta\ket{m} \bra{m} )) \\
 & =\frac{1}{2}+ \frac{\sin \theta}{2}(\bra{p} \Pi_{0}\ket{p} -\bra{m} \Pi_{0}\ket{m} )
\end{align}
$$
Claim: $\bra{m}\Pi_{0}\ket{m}\geq 0$
Use $\Pi_{0}^{2}=\Pi_{0}$ and $\Pi_{0}^{\dagger}=\Pi_{0}$
So
$$
p(\Pi_{0})\leq \frac{1}{2}+\frac{\sin \theta}{2}\bra{p} \Pi_{0}\ket{p} \leq \frac{1}{2}+ \frac{\sin \theta}{2}
$$



## Pauli
Act on $\mathcal{H}=\mathbb{C}^{2}$ (single [[Notes/Qubit]])
$$
X=\sigma_{x}=\sigma_{1}=\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}\\
$$
$$
Y=\sigma_{y}=\sigma_{2}=\begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix}\\
$$
$$
Z=\sigma_{z}=\sigma_{3}=\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
$$

#### Properties
- They are [[Notes/Hermetian]] and unitary
- They anticommute $\{ X,Y \}=0$
- They are traceless
- $\sigma_{i}\sigma_{j}=i\varepsilon_{ijk}\sigma_{k}$ (IMPORTANT PLS REMEMBER)
In standard basis:
- $X\ket{0}=\ket{1}$, $X\ket{1}=\ket{0}$ for [[Notes/Qubit]] (bitflip operator)
- $Z\ket{0}=\ket{0}$, $Z\ket{1}=-\ket{1}$ (phase flip operator)
Similarly, but swapped:
- $X\ket{+}=\ket{+}$, $X\ket{-}=-\ket{-}$
- $Z\ket{+}=\ket{-}$, $Z\ket{-}=\ket{+}$

idk why I care about these:
- $\{ I,X,Y,Z \}$ form a basis of $M_{2}(\mathbb{C}^{2})$
- [[Notes/Hilbert-Schmidt Inner Product]] satisfies $\langle A,B \rangle_{HS}=0$ for $A\neq B$ both from above basis
- Also $\langle A,A \rangle_{HS}=2$

## Teleport
Suppose Alice has a particle in state $\ket{\psi}$ and a particle $A$
Bob also has a particle $B$ and $AB$ is in state $\ket{\phi^{+}}$ [[Notes/Bell basis]]
Aim: To send $\ket{\psi}$ to Bob but sending particles is not allowed.

Let $\ket{\psi}=\alpha \ket{0}+\beta \ket{1}$
Initial state has:
$$
\begin{align}
\ket{\psi} _{C} \ket{\phi^{+}} _{AB} =&(\alpha \ket{0} +\beta \ket{1} )\otimes \frac{1}{\sqrt{ 2 }}(\ket{00} +\ket{11} ) \\
 =&\ket{\phi^{+}} \ket{\psi} + \ket{\phi^{-}} (Z\ket{\psi} )+\ket{\psi^{+}} (X\ket{\psi} )+\ket{\psi^{-}} (XZ\ket{\psi} )\\
 =& \sum_{i,j}X^{i}Z^{j}\ket{\phi^{+}} X^{i}Z^{j}\ket{\psi}
\end{align}
$$
The way to derive this is using the identities:
$$
\begin{gather}
\ket{00} = \frac{1}{\sqrt{ 2 }}(\ket{\phi^{+}} + \ket{\phi^{-}} )\\
\ket{11} = \frac{1}{\sqrt{ 2 }}(\ket{\phi^{+}} - \ket{\phi^{-}} )\\
\ket{01} = \frac{1}{\sqrt{ 2 }}(\ket{\psi^{+}} + \ket{\psi^{-}} )\\
\ket{10} = \frac{1}{\sqrt{ 2 }}(\ket{\psi^{+}} - \ket{\psi^{-}} )\\
\end{gather}
$$
Alice does a Bell measurement with outcome $ij$ where $i,j\in \{ 0,1 \}$
She sends $ij$ to Bob.
Bob applies $Z^{j}X^{i}$ to his state which leaves him with $\ket{\psi}$.

## Periodicity
1. apply oracle
2. measure last register
3. do fourier
To find probability of success use:
The [[Euler Totient Function]] grows as 
$$
\phi(n)=O\left( \frac{n}{\log \log n} \right)
$$


## BB84
[[Notes/BB84]]
We want to share a secret key.
### Step 1
Alice generates strings $x$ and $y$
### Step 2
Alice sends $\ket{\psi_{xy}}=\ket{\psi_{x_{1}y_{1}}} \dots \ket{\psi_{x_{n}y_{n}}}$ to Bob
where 
$$
\ket{\psi_{00}} =\ket{0}
$$
$$
\ket{\psi_{01}} =\ket{1}
$$
$$
\ket{\psi_{10}} = \ket{+}
$$
$$
\ket{\psi_{11}} =\ket{-}
$$
### Step 3
Bob generates a random $y'$ and measures each qubit 
in appropriate basis with respect to $y'_{i}$
Then Alice and Bob communicate publicly where $y$ and $y'$ match
They discard values where they don't.
On average, there should be $\frac{n}{2}$ bits left.
### Step 4
Alice and Bob publicly compare some sample parts of string $x$
If there are errors, then qubits have been tinkered with 
and we can infer how much tinkering has been done.

## Shor's algorithm
[[Notes/Shor's Algorithm]]
Given period $r$ such that $a^{r}=1\pmod{N}$ where $2\mid r$, we find:
$$
N\mid a^{r}-1=(a^{r/2}-1)(a^{r/2}+1)
$$
If $r$ is the smallest period then $N\not\mid a^{r/2}-1$
Then $gcd(N,a^{r/2}+1)$ is likely to be nontrivial factor of $N$

To find $r$ we do the following:
Pick $M$ such that $M=2^{m}\geq N^{2}$
Do the usual periodicity determination stuff
Form the state:
$$
\frac{1}{\sqrt{ AM }} \sum_{c} \omega^{x_{0}c} \sum_{l} \omega^{lrc}\ket{c}
$$
where $\omega=e^{2i\pi rc / 2^{m}}$
The second sum is big when $rc / 2^{m}$ is near an integer, 
while it is small when it is not.
So we measure and assume $c /2^{m}\approx n /r$
For each $n$ there is a unique integer $c_{n}$ such that:
$$
\left\lvert  c_{n} - \frac{2^{m}n}{r}  \right\rvert \leq \frac{1}{2}
$$
Now approximate $c_{n} /2^{m}$ by continued fractions 
getting some $p,q$ coprime such that:
$$
\left\lvert  \frac{c_{n}}{2^{m} }- \frac{p}{q}  \right\rvert  < \frac{1}{q^{2}} \leq \frac{1}{2^{m+1}} \leq \frac{1}{2N^{2}}
$$
We now hope that $q=r$.

### Approximation
Let $0<x<1$ be a rational number, and let $p /q$ be a fraction such that 
$$
\left\lvert  x-\frac{p}{q}  \right\rvert <\frac{1}{2q^{2}}
$$
Then $p/q$ is a convergent of the continued fraction of $x$.


# Graphs
## Planar
### Corollary
If $G$ is planar and $\lvert G \rvert\geq 3$, then $\lvert E(G) \rvert\leq 3\lvert G \rvert-6$.
#### Proof
WLOG $G$ is connected (by adding some edges)
Then $3F\leq 2\lvert E(G) \rvert$
Now:
$$
2=\lvert V(G) \rvert -\lvert E(G) \rvert +F \leq \lvert V(G) \rvert - \frac{1}{3}\lvert E(G) \rvert 
$$
so the result follows
### Corollary
Suppose $G$ is planar and $\lvert G \rvert\geq 4$ and there is no cycle of length 3.
Then $\lvert E(G) \rvert\leq 2(\lvert G \rvert -2)$
#### Proof
$4\lvert F \rvert\geq 2\lvert E(G) \rvert$ 

## Hall
Let $G=(X\sqcup Y,E)$ be bipartite. 
There exists a [[Notes/Matching]] from $X$ to $Y$ if and only if 
for all $A\subseteq X$, $\lvert A \rvert\leq \lvert N(A) \rvert$
### Proof
If there is a matching, we can find an injection from $A$ to $N(A)$

Now suppose $\lvert A \rvert\leq \lvert N(A) \rvert$ for all $A\subseteq X$
We go by induction on $\lvert X \rvert$
#### Case 1
Suppose there is some $\emptyset \ne A\neq X$ such that $\lvert A \rvert=\lvert N(A) \rvert$
Then $A$ satisfies the criterion so there is a matching on $A$
Also set $B\subseteq X\setminus A$ and $G_{2}=G[X\setminus A \sqcup Y\setminus N_{G}(A)]$
Write:
$$
\lvert A \rvert +\lvert B \rvert \leq \lvert N_{G}(A\cup B) \rvert = \lvert N_{G}(A) \rvert  + \lvert N_{G_{2}}(B) \rvert  
$$
Thus $\lvert B \rvert\leq \lvert N_{G_{2}}(B) \rvert$
#### Case 2
For all $A\neq X$ we have $\lvert A \rvert<\lvert X \rvert$
Pick connected vertices $x,y$ 
Let $G'=G[X\setminus \{ x \} \sqcup Y\setminus \{ y \}]$
Let $B\subseteq X\setminus \{ x \}$
Then:
$$
\lvert N_{G'}(B) \rvert \geq \lvert N_{G}(B) \rvert -1 > \lvert B \rvert -1
$$
So $\lvert B \rvert\leq \lvert N_{G'}(B) \rvert$
So apply induction hypothesis.

## Corollary
If $G$ is $k$-regular bipartite, then there exists a matching.
### Proof
Compute the number of edges in two ways, 
as all the edges from $A$ and all the edges from $N(A)$

## Menger
Let $G$ be a connected graph and $a\ne b$ are not connected
The minimum size of $a-b$ [[Notes/Separator]] is the maximum number 
of disjoint paths from $a$ to $b$.
Equivalently if all $a-b$ separators have size at least $k$ 
then there exist $k$ disjoint paths from $a$ to $b$.
### Proof
#### Setup
Suppose it is not true.
Then it has a counterexample for some $k$, assume $k$ is smallest
Note $k\geq 2$, as the theorem holds for $k=1$
Let $\mathcal{G}$ be the set of counterexamples for that $k$
Let $G\in \mathcal{G}$ be a counterexample with the least number of edges.

For each $a,b$ in $G$, define $\kappa_{a,b}$ to be the size of smallest separator.
Suppose $a,b$ are counterexamples in $G$ 
with a maximum of $k$ disjoint paths from $a$ to $b$
Let $S$ be the minimum $a-b$ separator
Then $\lvert S \rvert=\kappa_{a,b}>k$ 
#### Step 1
There is a minimum separator $\tilde{S}$ which is neither $N(a)$ nor $N(b)$
To prove this, assume WLOG $S=N(a)$
If $N(a)\cap N(b)\neq \emptyset$, then let $x\in N(a)\cap N(b)$
Consider $G'=G-x$
In $G'$ there is at most $k-1$ disjoint paths from $a$ to $b$
(if there was more then in $G$ we can always add back the path $axb$)
By minimality, there is a separator $S'$ of size $k-1$ in $G'$
But then $S=S'\cup \{ x \}$ is a separator in $G$
Hence assume $N(a)\cap N(b)=\emptyset$
Let $ax_{1}x_{2}\dots x_{l}b$ be the shortest path from $a$ to $b$
where $l\geq 2$
As this is the shortest path, we know $x_{2}\not\in N(a)$
Also $x_{2}\ne b$
Now let $G'=G-x_{1}x_{2}$
Now $\kappa_{a,b}(G')<\lvert S \rvert$ otherwise there is a smaller counterexample
So let $S'$ be a separator of $a,b$ in $G'$ with size $\lvert S \rvert-1\geq 1$
Then $S'\cup \{ x_{1} \}$ and $S'\cup \{ x_{2} \}$ are both separators of $a,b$ in $G$
Now note $S'\cup \{ x_{2} \}\ne N(a)$ and $S'\cup \{ x_{1} \}\ne N(b)$
Also if $S'\cup \{ x_{1} \}=N(a)$ and $S'\cup \{ x_{2} \}=N(b)$ 
then $N(a)\cap N(b)=S'\ne \emptyset$
And thus we found a separator of $a,b$ that is neither $N(a)$ nor $N(b)$
#### Step 2 (main idea)
Let $G_{a}$ be connected component of $a$ in $G\setminus S$ and similarly $G_{b}$
Let $G_{\alpha}$ be the graph with vertices $G_{a}\cup S\cup \{ c \}$ 
and added edges $\{ sc: s \in S \}$
and $G_{\beta}$ graph with vertices $G_{b}\cup S\cup \{ c \}$
and added edges $\{ sc : s \in S \}$
We can think of $G_{\alpha}$ as collapsing $G_{b}$ into $c$ 
and adding the edges from $c$ to all of $S$
Every point of $S$ has at least one edge going towards $G_{b}$
(otherwise there is a smaller separator)
Also $N(b)\not\subseteq S$ so there is an edge going out of $b$ not to $S$
Thus we have removed at least $\lvert S \rvert+1$ edges.
Now $G_{\alpha}$ has less edges than $G$
Similar for $G_{\beta}$
Then $\kappa_{a,c}(G_{\alpha})= \lvert S \rvert$ and $\kappa_{b,c}(G_{\beta}) = \lvert S \rvert$
($S$ is a separator, and if there was a smaller one then it would separate $a,b$)
Now as $G_{\alpha}$ and $G_{\beta}$ are not counterexamples, by minimality, 
so there are disjoint paths $P_{1},\dots,P_{k}$ from $a$ to $c$ 
and disjoint paths $Q_{1},\dots,Q_{k}$ from $b$ to $c$
and we can concatenate them to find $k$ disjoint paths from $a$ to $b$

## Corollary
Let $G$ be connected with $\lvert G \rvert\geq 2$
Then $G$ is $k$-connected if and only if all pairs of $a\ne b$
admit $k$ disjoint paths from $a$ to $b$.
## Corollary
Let $G$ be connected with $\lvert G \rvert\geq 2$
Then $G$ is $k$-connected if and only if 
for any $B\subseteq V(G)$ with $\lvert B \rvert=k$ and $a\in V(G)\setminus B$
there are at least $k$ disjoint paths from $a$ to $B$


## Colouring
In proofs of $5-6$ colour theorems use
### Proposition
Let $G$ be planar. Then $\delta(G)\leq 5$.
#### Proof
The average degree of $G$ is $\frac{2e}{n}$
Since $e\leq 3n-6$ the average degree is at most $6-\frac{12}{n}<6$
So minimal degree is at most $5$

### Brooks
Let $G$ be a connected graph.
If $G$ is not an odd cycle or a complete graph then $\chi(G)\leq \Delta(G)$
### Proof
First $G$ is $\Delta$ regular by ordering vertices and greedy colouring
If $G$ is not $2$ connected, consider the cut vertex $x$ 
and let $G_{i}$ be a component of $G-x$ together with $x$
Then colour those components and combine
If $G$ is $3$ connected, pick $x\in G$
Pick $x_{1},x_{2}\in N(x)$ such that $x_{1}x_{2}$ are not connected
Then form the path $x_{1}x_{2}\dots x_{n}$ and use greedy

If $G$ is $2$ connected ...

### Polynomial 
Let $G$ be a graph. 
The chromatic polynomial is $P_{G}:\mathbb{Z}_{\geq 0}\to \mathbb{Z}_{\geq 0}$ 
where $P_{G}(t)$ is the number of $t$-colourings of $G$

## Proposition
Let $G /e$ be the [[Notes/Contraction along edge]] of $G$ 
Then 
$$
P_{G}(t) = P_{G-e}(t) - P_{G /e} (t)
$$
### Proof
Every colouring of $G-e$ where $x,y$ are coloured differently 
corresponds uniquely to a colouring of $G$
Every colouring of $G-e$ where $x,y$ are coloured the same 
corresponds uniquely to a colouring of $G /e$.
## Corollary
$P_{G}$ is a polynomial of degree $\lvert G \rvert$

## Proposition
Let $G$ be a graph with $n$ vertices and $m$ edges.
Then
$$
P_{G}(t) = t^{n}- mt^{n-1} + \dots
$$


### Vizing
Edge colouring $\chi'$
Let $G$ be a graph with $\Delta(G)=\Delta$
Then $\chi'(G)=\Delta$ or $\chi'(G)=\Delta+1$
### Proof
Clearly $\chi'(G)\geq \Delta$
WTS $\chi'(G)\leq \Delta+1$
Induction on edges
Pick an edge $xy_{1}$ and colour everything else in $\Delta+1$
Construct the longest sequence of distinct $y_{1}y_{2}\dots y_{k}$
where if $y_{i}$ is missing colour $c_i$ then $xy_{i+1}$ is coloured $c_{i}$
#### Case 1
No $y$ such that $xy$ is coloured $c_{k}$
Note $k\leq \Delta$
Now recolour $y_{i}$ with colour $c_{i}$
#### Case 2
$c_{k}=c_{j}$ for some $j<k$
Recolour $y_{i}$ with $c_{i}$ for $1\leq i<j$
leaving $y_{j}$ uncoloured, so WLOG $j=1$
and $y_{1}$ is uncoloured with $c_{1}=c_{k}$ missing at $y_{1},y_{k}$
Let $c$ be a colour unused in $x$
If $y_{1}$ is not in the same $c,c_{1}$ component as $x$ 
then recolour that component 
Similarly for $y_{k}$
Now $H$ is a $c,c_{1}$ component containing $x,y_{1},y_{k}$
Note that $H$ is a path or an even cycle
But one of $c,c_{1}$ is missing at each of $x,y_{1},y_{2}$ 
so $H$ cannot exist.

