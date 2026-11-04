# LST

## Knaster-Tarski Fixpoint

![[Knaster-Tarski fixed point theorem]]

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

![[Epsilon-recursion Theorem]]

## Mostowski

![[Well-Founded]]
![[Extensional]]
![[Local]]

![[Mostowski's Collapsing Theorem]]

## Ordinal

An ordinal is a [[Foundations/Set Theory/Transitive]] set well ordered by $\in$.
Order types are defined and unique for all sets
by [[Mostowski's Collapsing Theorem]]

## Cardinal

Assuming [[Axiom of Choice]], cardinality of $x$ is
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

[[Numerical Analysis]]

## Finite difference

$$
\frac{1}{h^2}[g(x-h)-2g(x)+g(x+h)]=g''(x)+\frac{1}{12}h^2g^{(4)}(x)+\frac{1}{360}h^4g^{(6)}(x)+O(h^6)
$$

## Gauss-Scheidel

![[Gauss-Seidel Method]]

## Jacobi

![[Jacobi Method]]

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

![[Conjugate Gradient Search]]
![[The Krylov Subspaces]]

## Eigenvalues

### Inverse

![[Inverse Iteration for Finding Eigenvalues]]

### QR

![[The QR Algorithm]]

# Asymptotic

## $\Gamma$ function

![[The Gamma Function]]

## Watson's lemma

[[Watson's lemma]]
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
  Then we have the [[Asymptotic Approximation]]

$$
F(x)\sim \sum_{n=0}^{\infty} a_{n} \frac{\Gamma(\alpha+\beta n+1)}{x^{\alpha+\beta n+1}}
$$

## Laplace Method

[[Laplace Method]]

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

[[Method of Steepest Descent]]
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

[[Automata and formal languages]]

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

![[Kleene's Recursion Theorem]]

## Primitive recursive

![[Gödel's primitive recursive functions]]

![[Partial Recursive Functions]]

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

![[Reduction Function]]

# Coding and Cryptography

[[Coding and Cryptography]]

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

An $(n,k)$ [[Linear Code]] with [[Generator Matrix]] $G=(I_{k}|B)$
has parity check matrix $H=(-B^{T}|I_{n-k})$

### Syndrome

![[Syndrome Decoding]]

### Hamming codes

Codes with parity check matrix whose columns are
all elements of $\mathbb{F}_{2}^{n}$

### Reed Muller

![[The Bar Product]]

$RM(d,r)$ is defined as the space spanned by
$v_{0}=(1,1,\dots,1)^{T}$ and a wedge product of at most $r$ of $v_{i}$
where $v_{i}=\mathbb{1}_{H_{i}}$ where $H_{i}=\{ p \in \mathbb{F}_{2}^{d} : p_{i}=0 \}$
Note the length is $2^{d}$

#### Theorem

1. The vector $v_{i_{1}}\wedge\dots \wedge v_{i_{s}}$ for $1\leq i_{1}<\dots<i_{s}\leq d$ and $0\leq s\leq d$ are a basis for $\mathbb{F}_{2}^{n}$
2. $RM(d,r)$ has rank $\sum_{s=0}^{r}{d \choose s}$
3. $RM(d,r)=RM(d-1,r)\mid RM(d-1,r-1)$ [[The Bar Product]]
4. $RM(d,r)$ has weight $2^{d-r}$

### BCH codes

![[BCH Code]]

## Information theory

### Entropy

$$
H(X,Y) = H(X|Y) + H(Y)
$$

![[Fano's Inequality]]

### Mutual information

$$
I(X;Y) = H(X) - H(X|Y)
$$

$H(X)$ measures how much we don't know about $X$
$H(X|Y)$ measures how much we don't know about $X$ if we know $Y$
$I(X;Y)$ is the knowledge gained about $X$ given $Y$

### Info capacity (for calculations)

![[Information Channel Capacity]]

### Operational channel capacity

Supremum over all reliable transmittion rates
![[Transmit Reliably]]
![[Maximum Error Probability]]

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

![[Rabin Cryptosystem]]
![[RSA Cryptosystem]]

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

[[Quantum Information and Computing]]

## Distinguishing states

![[Helstrom Hovelo Theorem]]

## Pauli

![[Pauli Matrices]]

## Teleport

![[Quantum Teleportation]]

## Periodicity

1. apply oracle
2. measure last register
3. do fourier
   To find probability of success use:
   ![[Coprimality Theorem]]

## BB84

[[BB84]]
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

[[Shor's Algorithm]]
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

![[Continued Fraction#Approximation]]

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

![[Hall's Theorem]]

## Menger

![[Menger's Theorem]]

## Colouring

In proofs of $5-6$ colour theorems use

### Proposition

Let $G$ be planar. Then $\delta(G)\leq 5$.

#### Proof

The average degree of $G$ is $\frac{2e}{n}$
Since $e\leq 3n-6$ the average degree is at most $6-\frac{12}{n}<6$
So minimal degree is at most $5$

### Brooks

![[Brooks' Theorem]]

### Polynomial

![[Chromatic Polynomial]]

### Vizing

Edge colouring $\chi'$
![[Vizing Theorem]]
