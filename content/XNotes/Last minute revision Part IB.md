# Methods
## Poisson summation formula thingie
$$\sum_nf(x+n)=\sum_n\hat f(2\pi n)e^{2\pi i n x}$$
Derivation: note that both sides are 1-periodic so just calculate the Fourier series. Note that RHS immediately gives coefs $\hat f(2\pi n)$ while LHS will conveniently become a Fourier transform. 
($\sum_n\int_0^1$ goes to $\sum_n\int_n^{n+1}=\int_{-\infty}^\infty$ after substitution $y=x+n$)
## Characteristics
$$a(x,y){\partial u\over \partial x} + b(x,y){\partial u\over \partial y}=c(x,y,u)$$
with initial data along some curve $u(x(t),y(t))=h(t)$.
For fixed $t$, find $A=(x(t),y(t))$, a point on initial curve. Also find $x_t(s)$ and $y_t(s)$ satisfying:
$${dx_t\over ds}=a(x_t,y_t)\quad\quad {dy_t\over ds}=b(x_t,y_t)$$
with initial data $(x_t(0),y_t(0))=A$.
Hence letting $z(s)=u(x_t(s),y_t(s))$ we find
$${dz\over ds}=c(x_t,y_t,u)$$
Now this gives $u$ in terms of $s$ and $t$. So find $s$ and $t$ in terms of $x$ and $y$ by inverting $x_t(s)$ and $y_t(s)$. Hence we got $u(x,y)$. yay.
## Classification of 2nd order PDEs
For stuff of form:
$a\partial_{xx}u+2b\partial_{xy}u+c\partial_{yy}u+(1st\ order)=...$ find characteristics in terms of $z=dy/dx$ s.t. 
$$az^2+2bz+c=0$$
Let $\xi(x,y)$ and $\eta(x,y)$ be coordinates along these characteristics, our equation will transform to $\partial_{\xi\eta}u+(1st\ order)=...$
(note that we can't do much if theres only one sol...)
## Green's functions
### Heat equation
$$u_t-\kappa\nabla^2u=F(x,t)$$
$$u(x,0)=f(x)$$
We split the problem into two:
1. $F=0$
2. $f=0$
Then the solution is given by superposition.
First problem is easily solved by taking Fourier transform in $x\to \lambda$ and then using convolution theorem.
Second problem has the same approach:
$$\hat u_t+\kappa|\lambda|^2\hat u=\hat F$$
$$\partial_t(\hat ue^{\kappa|\lambda|^2t})=e^{\kappa|\lambda|^2t}\hat F$$
Hence, by $0$ initial conditions, we can obtain 
$$\hat u=\int_0^te^{-\kappa|\lambda|^2(t-s)}\hat F(\lambda,s)ds$$
And now apply convolution theorem UNDER the integral (so the final sol has a double integral).
### Laplace equation
We can solve $\nabla^2u=F(x)$ on some domain $\Omega$ by finding the Green's function $\nabla^2G=\delta(x-y)$ for every $y\in \Omega$. With some trouble we get:
$$G(x;y)=\begin{cases}\log|x-y|&n=2\\|x-y|^{2-n}&n>2\end{cases}$$
up to some constants. Hence $u=\int_\Omega G(x;y)F(y)dy$
If we further want $u=0$ on $\partial\Omega$ we first find $G_1$ for $y\in \Omega$, and then for each $y$ find $y'\not\in\Omega$ s.t. $G(x;y)=G_2(x;y')+G_1(x;y)=0$ on $\partial\Omega$. Think of this as placing charges s.t. the electrical potentials cancel out. Now $\nabla^2G=\nabla^2G_1+\nabla^2G_2=\delta(x-y)+\delta(x-y')=\delta(x-y)$ inside $\Omega$ because $\delta(x-y')$ is always zero because $y'\not\in\Omega$.
### Wave equation
$$\begin{cases}u_{tt}-c^2\nabla^2u=F(x,t)\\u(x,0)=f(x)\\ u_t(x,0)=g(x)\end{cases}$$
Solved very similar to Heat equation, by separating the problem into bits with 0 forcing and 0 initial data. The inverse Fourier is UGLY to compute generally ... but it involves some $H$ in 1 dimension or some $\delta$ in 3 dimensions.
#### Wave on halfline
$$\begin{cases}v_{tt}-c^2v_{xx}=P(x,t)&x,t>0\\ v(0,t)=p(t)\\v(x,0)=q(t)\\ v_t(x,0)=r(t)\end{cases}$$
Firstly, by appropriate substitution, transform this problem into
$$\begin{cases}u_{tt}-c^2u_{xx}=F(x,t)&x,t>0\\
u(0,t)=0\\u(x,0)=f(x)\\u_t(x,0)=g(x)\end{cases}$$
Now consider the odd extensions $F_{odd}, f_{odd}, g_{odd}$ defined for $x\in R$. Because they are odd, they should cancel out at $x=0$ at give appropriate initial condition $u(0,t)=0$. Hence solve the wave on full line.

# Quantum mechanics
## Commutators
- $[AB,C]=A[B,C]+[A,C]B$
- $[A,BC]=[A,B]C+B[A,C]$
- $[L_i,L_j]=i\hbar\epsilon_{ijk}L_k$
- $[x_i,p_j]=i\hbar \delta_{ij}$
## Hydrogen atom
- Energy of electrons in hydrogen atom is NEGATIVE, so the substitution $\gamma = \sqrt{-{2mE\over \hbar^2}}$ make sense and sols are $\sim e^{-\gamma r}$ as $r\to\infty$.
- We sub in $f(r)e^{-\gamma r}$ and find series solutions from there. 
- When measured simultaneously $H$, $L^2$ and $L_i$ have eigenvalues $E_n\sim \frac 1 {n^2}$, $l(l+1)\hbar^2$ and $m\hbar$ respectively where $l\in[0,n-1]$ and $m\in[-l,l]$. 
- $n$ is the principal quantum number, $l$ is the azimuthal quantum number and $m$ is the magnetic quantum number 
# Optimisation
## Gradient and Newton
- $x_{k+1}=x_k-t Df(x_k)$. 
- Gradient error is proportional to $(1-\frac m M)^k$ with stepsize $t=1/M$ assuming that the derivative is bounded $mI\leq D^2f(x)\leq MI$.
- $x_{k+1}=x_k-(D^2f(x_k))^{-1}Df(x_k)$ 
- Newton error is less than ${2m^3\over L^2}({L\over 2m^2}||Df(x_0)||)^{2^{k+1}}$ where again $D^2f\geq mI$ and $D^2f$ is $L$-[[XNotes/Lipschitz]]. Sadly, in newton we need to recompute the gradient every step which can be a pain.
## Two player zero sum games
## Theorem
Suppose $p$ and $q$ are strategies for Player1 and Player2 respectively, and $v$ is a value satisfying:
- $A^Tp\geq ve$
- $Aq\leq ve$
- $v=q^TA^Tp$
Then these are all optimal, and $v$ is the value of the problem.

## Linear programming
## Simplex algorithm
Have the problem:
Minimize $(c^T\quad 0^T)x$ s.t. $(A\quad I)x=b$ and $x\geq 0$.
where $I$ is $m\times m$ identity matrix, and $b\geq 0$.
Hence try a [[Numerical/Basic solutions (LP)\|BFS]] $x^T=(0^T\quad b^T)$ (which of course has exactly $m$ nonzero indices)
Now apply [[XNotes/Optimality conditions in LPs#Optimality condition\|the optimality condition]], noting that (in that notation) $c_B=0$ (and $B=I$), hence we only need to check $c\geq 0$. If so, we are done.
Otherwise, find an index s.t. $c_j$ is negative (usually the most negative one). Then find $i$ s.t. $b_i/A_{ij}$ is the smallest possible positive value. If they are all negative the problem is unbounded.

Now pivot around $A_{ij}$, i.e. use row operations to make the $j$-th column be $e_i$. Note that these operations will preserve $b\geq 0$. Now by swapping columns we have arrived at the same form as the starting problem. Repeat these steps until done.

## Two-phase algorithm
If our initial problem is not of the desired form, we do two phases, as follows.
### Phase 1
Suppose we are given the problem of minimizing $c^Tx$ s.t. $x\geq 0$ and $Ax=b$. We can WLOG take $b\geq 0$.
First consider the problem of minimizing $\sum_i y_i$ s.t. $Ax+y=b$, with $x,\ y\geq 0$. Now this is of the form $(A\quad I)y=b$, so we can apply the [[XNotes/Simplex method#Simplex algorithm\|simplex algorithm]]. This *has to* terminate at a solution $(x_0^T\quad 0^T)$ if the original problem is feasible. But now $x_0$ is a [[Numerical/Basic solutions (LP)\|BFS]] of the original problem. Now, given that we also tracked the $c^Tx$ function in this algorithm, we are sure to have a good setup for Phase 2.
### Phase 2
We can remove $y$ from our consideration and apply the [[XNotes/Simplex method#Simplex algorithm\|simplex algorithm]] again, now only looking at $c^Tx$.
## Transportation algorithm
Suppose we have suppliers having supplies $s_1,s_2\dots s_n$ and buyers having demands $d_1,d_2\dots d_m$. (WLOG assume their sums are the same). The transportation cost from $s_i$ to $d_j$ is $c_{ij}$.
Hence, this is a [[XNotes/Linear programs\|linear program]]:
minimise $\sum_{i,\ j}x_{ij}c_{ij}$ s.t. $\sum_j x_{ij}=s_i$ and $\sum_ix_{ij}=d_j$.
Calculate the Lagrangian:
$\begin{align}L(x,\lambda,\mu)&=\sum_{i,j}x_{ij}c_{ij}-\sum_i\lambda_i(\sum_jx_{ij}-s_i)-\sum_j\mu_j(\sum_ix_{ij}-d_j)\\&=\lambda^Ts+\mu^Td-\sum_{i,\ j}x_{ij}(c_{ij}-\lambda_i-\mu_j)\end{align}$$
Now, as $x_{ij}\geq 0$ we certainly need $c_{ij}-\lambda_i-\mu_j\leq 0$. Also, by complimentary slackness, whenever $x_{ij}>0$ we need $c_{ij}=\lambda_i+\mu_j$.

## The transportation algorithm
Firstly, find any feasible $x_{ij}$ (with not too many nonzero $x_{ij}$ - achieve this by being greedy). This will give $n+m-1$ equations of form $c_{ij}=\lambda_i+\mu_j$. Solve them (taking $\lambda_1=0$ for example). If now $c_{ij}\leq \lambda_i+\mu_j$ for all $i,j$, we are done because we have a feasible dual problem and complimentary slackness ([[XNotes/Optimality conditions in LPs\|optimality conditions]]). Otherwise, find the largest $c_{ij}-\lambda_i-\mu_j>0$ and change $x_{ij}$ to $x_{ij}+\epsilon$ while also redistributing the values in the initial flow (by $\pm\epsilon$ each) so that $x_{ij}$ remains feasible. 
Find the largest such $\epsilon$ where this is possible (i.e. one of the $x_{ij}$ will become 0). Note that we have made the Lagrangian smaller by $\epsilon(c_{ij}-\lambda_i-\mu_j)$. But for a feasible $x$ (which it is), the Lagrangian only depends on $x$ so we can shuffle the $\lambda$ and $\mu$ again.
Now we have a new set of $n+m-1$ equations for $\lambda$ and $\mu$ so recalculate them, check if they are feasible, if not, repeat the algorithm, making the Lagrangian (and hence the cost) smaller every time.
## Max flow min cut theorem proof
- Max flow <= Min cut proved by taking some min cut $S,\overline S$ and summing up flows in between them ... should be easy
- Max flow >= Min cut. Construct $S$ by adding $0$ to it and then adding anything that would be in the augmented path. But there is no augmented path from $0$ to $n$ hence use some ineqs here ...
# Variational principles
## Noether
Suppose we have a functional
$F[x]=\int f(t,x,\dot x) dt$$
And some family of transformations
$x(t)\to X(s;t)$ where $s\in\mathbb R$ satisfying $x(t)=X(0;t)$ and:
${d\over ds} f(t,X,\dot X) = 0$$
Then there is a first integral of Euler-Lagrange equations:
${\partial f\over \partial \dot x}{\partial X\over \partial s}\bigg\rvert_{s=0}=\text{const}$$
Summation is implied with $x$ a vector of variables.

#### Example
If there is no $x$ dependence, we can try $X(s;t)=x(t)+s$. The theorem then gives:
${\partial f\over \partial \dot x} = \text{const}$ which is a First integral in [[XNotes/Euler-Lagrange#First integrals]].

## Legendre
Let $f:S\to \mathbb R$. Then the Legendre transform is:
$f^*(p)=\sup_{x\in S} (p\cdot x -f(x))$$
For $f$ convex, it is always true that $(f^*)^*=f$  on a domain where they are both defined.

In practice, we will have $p=\nabla f$. 
## Second variation
Integrate by parts ($\int Q\eta^2+P\dot\eta^2$) to find a [[XNotes/Sturm-Liouville operator]] and then solve $\mathcal L \eta =-\omega^2\eta$. 
# Numerical Analysis
## Error of polyn interpolation
If we interpolated at $x_0\dots x_n$ and we want to find error at $x$, just interpolate on $x_0\dots x_n, x$ and find $\xi$ s.t. $f[x_0\dots x_n, x]=\frac 1 {(n+1)!}f^{(n+1)}(\xi)$. 
## Orthogonal polyns
- Suppose the inner product is $<\cdot,\cdot>_w=\int_a^bw \cdot \cdot\  dx$  and suppose $p_n$ is the orthogonal polyn of degree $n$. Then all its zeros are in $(a,b)$: Consider $p_n$ changing sign at $\phi_1\dots \phi_m$. Define $q(x)=\prod (x-\phi_i)$. In particular, $qp_n\geq0$. But then $p_n$ doesn't kill $q$ in the inner product hence $q$ has degree at least $n$ hence $m=n$. 
## Peano Kernel
Suppose $L$ is a linear functional that annihilates all polynomials in $P_n[x]$ (see [[Numerical/Approximating linear functionals]]).
Then using [[XNotes/Taylor's theorem]]:
$f(x)=\sum_{k=0}^n f^{(k)}{(x-a)^k\over k!}+\frac 1 {n!}\int_a^x(x-\theta)^nf^{(n+1)}(\theta)d\theta$$
Rewrite this as 
$f(x)=\sum_{k=0}^n f^{(k)}{(x-a)^k\over k!}+\frac 1 {n!}\int_a^b(x-\theta)^n_+f^{(n+1)}(\theta)d\theta$$
where $(x-\theta)^n_+=\begin{cases}(x-\theta)^n&\theta<x\\ 0&\text{otherwise}\end{cases}$$
Then using the fact that $L$ annihilates $P_n[x]$, we have:
$L(f)=\frac 1 {n!} \int_a^b K(\theta)f^{(n+1)}(\theta)d\theta$$
where $K(\theta)=L(x\to(x-\theta)^n_+)$ is the Peano kernel.
For example, we find:
$|L(f)|\leq \frac {||f^{(n+1)}||_\infty} {n!} \int_a^b|K(\theta)|d\theta $$

## Multi-step
[[XNotes/Multi-Step Methods]]
$$\sum\rho_ly_{n+l}=h\sum\sigma_lf(t_{n+l},y_{n+l})$$
Order is largest $p$ s.t. 
$\sum\rho_ly(t_{n+l})-h\sum\sigma_ly'(t_{n+l})=O(h^{p+1})$
### Dahlquist theorem
Multi-step converges iff $p\geq 1$ and $\rho(z)=\sum\rho_lz^l$ satisfies the root condition, i.e. all roots are $|\omega|\leq 1$ and all roots $|\omega|=1$ are simple.
## Linear stability
Finding a solution to $y'=\lambda y$ often ends up with $y_n\sim (r(\lambda h))^n$. Hence, for A-stability, we only need to check that the maximum of $|r(\lambda h)|$ is $<1$ on $\mathbb C^-$. Use [[XNotes/Maximum principle]], so we only need to check $|r(z)|\leq 1$ on imaginary axis. 
## QR factorisation
### Gram-Schimdt
$$b_j=a_j-\sum_{i=1}^{j-1}{R_{ij}\over ||b_i||}b_i$$
with $q_i={b_i\over ||b_i||}$ and $R_{ij}=<q_i,a_j>$ for $i<j$ and $R_{jj}=||b_j||$.
### Givens rotations
We use the fact that
$$\begin{pmatrix}{\alpha\over\sqrt{\alpha^2+\beta^2}} & \beta\over\sqrt{\alpha^2+\beta^2} \\ -\beta\over\sqrt{\alpha^2+\beta^2} & \alpha\over\sqrt{\alpha^2+\beta^2}\end{pmatrix}\begin{pmatrix}\alpha\\\beta\end{pmatrix}=\begin{pmatrix}\sqrt{\alpha^2+\beta^2}\\ 0\end{pmatrix}$$
To introduce the $0$s from left to right. 
### Householder reflections
For $u\neq 0$ we define $H_u=I-2{uu^T\over u^Tu}$. It is symmetric and $H_uH_u=I$, so it is orthogonal.

Suppose $a\neq b$ but $||a||=||b||$. Then by picking $u=a-b$, we find:
$$H_ua=b$$
(just expand and pray)

Now setting $a=(a_1,\dots, a_k,\dots a_n)$ and $b=(a_1,\dots, a_{k-1}, \gamma,0,\dots,0)$ we find $u=(0,\dots,0,a_k-\gamma,a_{k+1}\dots,a_n)$ where $\gamma=\sqrt{\sum_{i=k}^na_i^2}$. Then $H_u$ doesn't affect the first $k-1$ rows and columns of a matrix, and if $a$ is the $k$-th column, we have $H_ua=b$ so we introduced $0$s to the $k$-th column. 
# Complex Methods
## Jordan
Let $f(z)$ be analytic in $\mathbb C$ except for a finite number of singular points, with $f(z)\to 0$ as $|z|\to\infty$. Let $\lambda, \mu\in \mathbb R$ with $\lambda>0$ and $\mu<0$. Then:
$\lim_{R\to\infty}\int_{\gamma_R}f(z)e^{i\lambda z}dz =0$$
$\lim_{R\to\infty}\int_{\overline\gamma_R}f(z)e^{i\mu z}dz =0$$
Where $\gamma_R$ is a half circle in the upper half plane i.e. $\gamma_R:[0,\pi]\to\mathbb C$ and $\gamma_R(\theta)=Re^{i\theta}$ while $\overline \gamma_R$ is a half circle in lower half plane i.e. $\overline\gamma_R(\theta)=Re^{-i\theta}$

### Proof
For $\lambda>0$ let $\gamma_R(\theta)=Re^{i\theta}$. Also note $\sin\theta \geq 2\theta/\pi$ on $[0,\pi/2]$. 
Hence write:
$\begin{align}\left|\int_{\gamma_R}f(z)e^{i\lambda z}dz\right|&\leq R\sup_{z\in\gamma_R} |f(z)|\int_0^\pi e^{-\lambda R\sin\theta}d\theta\\&\leq 2R\sup|f(z)|\int_0^{\pi/2}e^{-\lambda R \ 2\theta/\pi}d\theta\\ &={\pi\over 2 \lambda }(1-e^{-\lambda R})\sup |f(z)|\to 0\end{align}$$

## Laplace transform
$$F(s)=\int_0^\infty f(t)e^{-st}dt$$
### Inverse
$$f(t)=\frac 1 {2i\pi}\int_{\alpha-i\infty}^{\alpha+i\infty} F(s)e^{st}ds$$
$$f(t)=\sum_{k=1}^n\Res_{s=s_k}(F(s)e^{st})$$
# Analysis and Topology
## Uniform convergence
### Derivatives
Suppose $\sum f_n'$ converges uniformly to some $g$ and $\sum f_n(c)$ converges for some $c$. Then $\sum f_n$ converges uniformly to some $f$ and $f'=g$. 
### Bounded
Suppose each $f_n$ is bounded by $M_n$ and $\sum M_n$ converges. Then $\sum f_n$ converges uniformly. 
## Power series
### Uniform convergence of power series
Let $R$ be the radius of convergence of a power series. Then for any $0<r<R$ the series [[XNotes/Uniform convergence of functions\|converges uniformly]] on $D(a,r)$.
#### Proof sketch
Take $w$ s.t. $r<|w-a|<R$, and (by convergence of power series) find $M$ s.t. $|a_n(w-a)^n|<M$ for all $n$. Then we have ${|z-a|\over |w-a|}<{r\over |w-a|}<1$, so $|a_n||z-a|^n<|a_n||w-a|^n{r^n\over|w-a|^n}<M{r^n\over |w-a|^n}$$
So take $M_n=M{r^n\over |w-a|^n}$ and note that $\sum_{n=1}^\infty M_n$ converges. We are done by [[XNotes/Uniform Cauchy]].

## Metric spaces
### Picard-Lindelof
Let $a<b$ and $R>0$. Suppose $y_0\in\mathbb R^n$. Let $\phi:[a,b]\times B_R(y_0)\to\mathbb R^n$ be continuous and for some $K>0$ we have $\forall x,y\in B_R(y_0), \forall t\in[a,b]$
$$||\phi (t,x)-\phi(t,y)||\leq K||x-y||$$
There there is a $\epsilon>0$ s.t. $\forall t_0\in[a,b]$:
$$f'(t)=\phi(t,f(t)),\quad\quad f(t_0)=y_0$$
has a unique solution in $[t_0-\epsilon,t_0+\epsilon]\cap [a,b]$.
### Compact - Seq compact - Totally bounded
The following are equivalent:
1. $M$ is compact
2. $M$ is sequentially compact
3. $M$ is totally bounded and complete
#### Proofs
$(1\implies 2)$ Take any sequence. Then every point has a nbd with finitely many points (otherwise there is a conv subseq). Apply compactness to these nbds.
$(2\implies 3)$ To show its complete, take a Cauchy sequence. Hence its bounded. Hence has a conv subseq. Done.
To show its totally bounded, pick $x_0\in M$ and keep picking $x_n\not\in \bigcup_{k=1}^{n-1}B_\epsilon(x_k)$. This sequence isn't Cauchy so it cannot have a convergent subsequence.
$(3\implies 2)$ Pick a sequence. Let $N_0=\mathbb N$. For each $\epsilon=1/n$ find the finite $\epsilon-net$ that covers $M$. Find the ball that contains infinitely many terms of subseq given by $N_{n-1}$. Then define $N_n\subseteq N_{n-1}\setminus\{\min N_{n-1}\}$ to be these infinitely many terms. 
Now $n_k=\min N_k$ is Cauchy hence convergent.
$(1\implies 3)$ Easily implies totally bounded. To show complete, take a Cauchy sequence, and open nbds with finitely many terms of Cauchy seq in them.
$(3\implies 1)$ Let $\mathcal U$ be an open cover. For subset $X$ of $M$ we say it is finitely covered if it can be finitely covered by $\mathcal U$. By assumption, $M$ is not finitely covered, hence cover it by $\epsilon$ balls and find the ball that is not finitely covered. Then cover that ball by $\epsilon/2$ balls and find a ball that is not finitely covered. Continue this. Find a sequence, which will be Cauchy and converges to $x$. Take $U\in \mathcal U$ s.t. $x\in U$. But $U$ will cover some of the "not finitely covered" balls which is a contradiction.
$(2\ \&\ 3\implies 1)$ Claim: We can find $\delta>0$ s.t. for any $a\in M$ there is a $G\in\mathcal U$ s.t. $B_\delta(a)\subseteq G$. Proof: Suppose no such $\delta$. For $\delta=1/n$ find a sequence of counterexamples $a_n$. It has a convergent subsequence to some $a$. But then there is a $G\in \mathcal U$ s.t. $a\in G$, hence for large enough $n$, we have $B_{1/n}(a_n)\subseteq G$. 
Now with the claim, apply total boundedness. 
## Topological spaces
### Connectedness
$U\subseteq \mathbb R^n$ open is connected iff it is path-connected. Proof: Let $V$ be a path-connected component. Then we show $V$ and $U\setminus V$ are open in $U$, hence they disconnect it.
### Compactness
#### Continuous on compact set
If $X\neq \emptyset$ is compact, and $f:X\to \mathbb R$ continuous, then $f$ is bounded and attains it's bounds. Proof: Cover $X$ by $\mathcal U = \{f^{-1}((f(x)-1,f(x)+1)) : x\in X\}$ to show $f$ is bounded. Then set $m=\inf f(x)$. If $f(x)>m$ for any $x$, find $f(x)>m_x>m$. Hence $f^{-1}((m_x,\infty))$ are open cover of $X$. 
#### Finite products
VERY TECHNICAL :(((((((
Let $X\times Y$ be a product of compact spaces $X$ and $Y$. Let $\mathcal U$ be its open cover. For each $(x,y)\in X\times Y$, find $U_{xy}\in\mathcal U$. Hence find open nbd $V_{xy}$ of $x$ in $X$ and $W_{xy}$ of $y$ in $Y$ s.t. $V_{xy}\times W_{xy}\subseteq U_{xy}$. Define $W_x=\{W_{xy}:y\in Y\}$, an open cover of $Y$. Hence define $F_x\subseteq Y$ finite s.t. $\{W_{xy}:y\in F_x\}$ cover $Y$. Hence let $V_x=\bigcap_{y\in F_x}V_{xy}$ be open in $X$. $V_x$ cover $X$ hence find $F\subseteq X$ finite s.t. $\{V_x:x\in F\}$ cover $X$. Then $\{V_x\times W_{xy} : x\in F, y\in F_x\}$ is finite and covers $X\times Y$. So also $\{U_{xy}: x\in F, y\in F_x\}$ is finite and covers $X\times Y$. 
#### Subsets of $\mathbb R^n$ (Heine-Borel)
$K\subset \mathbb R^n$ is compact if and only if it is closed and bounded.
Proof: Uses cts function $f(x)=||x||$ to show it is bounded. Also compact subspace of Hausdorff space is closed. 
On the other hand, if $K$ is closed and bounded, it is contained in a finite product of compact intervals $[-M,M]^n$, hence it is a closed subspace of compact space hence compact. 
## Differentiation 
$f$ is differentiable iff $f_j=\pi_j\circ f$ is differentiable (each component is differentiable).

Suppose $D_if$ (partial derivative) exists in an open nbd of $a$ and is cts at $a$ for all $i$. Then $f$ is differentiable at $a$. 
### MVI
Suppose $f$ is differentiable on open $U$ and for some $a,b\in U$ there is an $M>0$ s.t. $||f'(x)||\leq M$ for all $x\in[a,b]$. Then:
$$||f(b)-f(a)||\leq M||b-a||$$
#### Proof
Let $v=f(b)-f(a)$. Define $\phi:[0,1]\to \mathbb R$ with $\phi(t)=v\cdot f((1-t)a+tb)$. Then $\phi(1)-\phi(0)=||f(b)-f(a)||^2$ and $\phi'(t)=v\cdot f'((1-t)a+tb)(b-a)$. By MVT find $\theta\in (0,1)$ s.t. $\phi'(\theta)=\phi(1)-\phi(0)$. Then write out $||f(b)-f(a)||^2$.

# GRM
## Alternating groups
### Generated by 3-cycles
$(ab)(bc)=(cab)$
$(ab)(cd)=(abc)(bcd)$
#### $A_n$ simple for $n\geq 5$
Let $N\triangleleft A_n$. If $N$ contains a $3$-cycle, it contains all 3-cycles (used $n\geq 5$, because cycle type $(3,1,1...)$ doesn't split). Now let $\sigma\in N$. Cases:
1. $\sigma=(12\dots r)\tau$ for $r\geq 4$: use $\sigma^{-1}(321)\sigma(123)=(r23)$
2. $\sigma=(123)(456)\tau$, use: $\sigma^{-1}(412)\sigma(124)=(12463)$
3. $\sigma=(12)(34)\tau$, first use $\sigma^{-1}(321)\sigma(123)=(14)(23)=\pi$. Then use $\pi^{-1}(521)\pi(125)=(12345)$. 
## Groups of prime order
Nontrivial centre: Consider the conjugacy classes and note that $Z$ is the union of conjugacy classes of size 1. 

If $G$ has order $p^n$ then it has subgroups of order $p^r$. 
Proof: Decompose $G=G_m\triangleright\dots\triangleright G_0=1$ and note that each quotient is simple hence has to be $C_p$. 
## Sylow theorems
1. $Syl_p(G)$ is nonempty
2. All Sylow $p$-subgroups are conjugate
3. $n_p\equiv 1\pmod p$ and $n_p\mid |G|$.
#### Proofs
1. Consider left multiplication action on set $\Omega$ of all subsets of $G$ of size $p^n$. 
2. Let $Q\leq G$ be of size $p^k$, and $P\in Syl_p(G)$. Consider left multiplication action of $Q$ on $G/P$, and find the orbit of size 1.
3. $n_p\mid |G|$ by orbit stabilizer and second Sylow. Now let $P\in Syl_p(G)$ and consider conjugation action of $P$ on $Syl_p(G)$ Look at orbits. $|Orb_P(P)|=1$. If there is another orbit of size 1, find that $Q$ and $P\leq N_G(Q)$. But now $Q$ and $P$ are Sylow subgroups of $N_G(Q)$ hence they are conjugate in it hence $P=Q$. 
## Rings
### Integral domain
$I$ max $\iff R/I$ field $\implies R/I$ integral domain $\iff I$ prime
For $p\neq 0$:
$(p)$ prime $\iff p$ prime $\implies p$ irreducible
Hence:
$(p)$ maximal $\implies p$ irreducible
### Principal ideal domain
$p$ irreducible $\implies (p)$ maximal $\implies p$ prime.
$\mathbb Z[X]$ is not PID but is UFD
### Polynomial rings
We assume $R$ is a UFD. Want to prove $R[X]$ is UFD.
By induction, we can write any element of $R$ as a product of irreducibles. Now it is enough to show that every irreducible is prime 

Every $p$ prime in $R$ is prime in $R[X]$ (i.e. every irreducible in $R$ is prime in $R[X]$).
Proof: $R/(p)$ is integral. Suppose $p\mid fg$ in $R[X]$. Then clearly $(f+(p))(g+(p))=0$ in $R/(p)$ but this is integral so $p\mid f$ or $p\mid g$. 

All lemmas about content follow, hence we can prove that for $f\in R[X]$ primitive and irreducible in $R[X]$ it is irreducible in $F[X]$
Furthermore, if $f\in R[X]$ is primitive and prime in $F[X]$ it is prime in $R[X]$. 

Now if $f\in R[X]$ is primitive and irreducible, it is irreducible in $F[X]$, so it is prime in $F[X]$ so it is prime in $R[X]$. 

So $R[X]$ is a UFD. 

### Gaussian ints
For a prime $p\in \mathbb Z$ the following are equivalent:
1. $p$ is not prime in $\mathbb Z[i]$
2. $p$ is sum of two squares
3. $p=2$ or $p\equiv 1\pmod 4$
#### Proofs
$(1\implies 2)$ Write $p=xy$ where $x,y$ are not unit. Then $p^2=N(x)N(y)$, but then $p=N(x)=N(y)$.
$(2\implies 3)$ easy
$(3\implies 1)$ Solve $x^2\equiv-1\pmod p$ (using primitive roots). Then $p\mid (x+i)(x-i)$, but $p\not\mid x+i$ and $p\not\mid x-i$, so it isn't prime. 

### Noetherian 
$R$ is Noetherian iff every ideal is finitely generated. 
#### Hilbert basis theorem
If $R$ is Noetherian then $R[X]$ is Noetherian.
##### Proof
Suppose $J$ is not finitely generated. Hence find a sequence of polynomials $f_n$ in $J$ s.t. $f_{n+1}$ is not generated by previous ones (also pick it s.t. it has the smallest possible degree). Take their leading coefficients. They are in $R$ so one of them will be generated by previous ones. Define $g=f_m-$stuff s.t. $g$ has a smaller degree than $f_m$ and is not generated by $f_k$ $k< m$. If we chose $f_n$ to be of smallest degree, this will be a contradiction.  