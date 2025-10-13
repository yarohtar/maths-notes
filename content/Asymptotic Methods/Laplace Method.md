We have an integral of the form
$$
F(x) = \int_{a}^{b} f(t)e^{x\phi(t)} dt
$$
and we want to find [[Asymptotic Methods/Asymptotic Approximation]] of $F$ 
when $x\to \infty$

We assume that zeros and singularities of $f$ are not problematic.
If they are, we need to account for them separately.
Best way to do this is by some [[Asymptotic Methods/Watson's lemma]] type argument.
# The method
## Draw picture of $\phi(t)$
We want to figure out the most important features of $\phi$ 
## Find the significant points
We want to find all the global maxima of $\phi$.
This may include local maxima in $(a,b)$ 
as well as the endpoints $a$ and $b$
## Truncation
We split the integral into small sections around the maxima
## Expansion
For each maximum $c$, write:
$$
f(t) = f(c) + f'(c) (t-c) + \frac{1}{2} f''(c)(t-c)^{2} +\dots
$$
$$
x\phi(t) \sim x\phi(c) + xA_{p}(t-c)^{p} + xA_{p+1}(t-c)^{p+1} + \dots
$$
up to appropriate number of terms. 
Note that we take $A_{n}=\frac{\phi^{(n)}(c)}{n!}$ and $p$ is the first nonzero term.
Crucially, $p$ is even (otherwise $c$ is a saddle, not a max)
## Change variables
Use the change of variables:
$$
t=c+x^{-1/p}u
$$
and don't forget also $dt=x^{-1/p}du$.
Note that the boundary now becomes large.
The exp bit of the integrand becomes:
$$
\exp\left( x\phi(c) + A_{p} u^{p} + A_{p+1} \frac{u^{p+1}}{x^{1/p}} + A_{p+2} \frac{u^{p+2}}{x^{2/p}} + O\left(  \frac{u^{p+3}}{x^{3/p}} \right) \right)
$$
## Taylor expand
Use $e^{z}=1+z+\frac{z^{2}}{2}+\dots$ on terms past $A_{p}u^{p}$ to get:
$$
e^{x\phi(c)+A_{p}u^{p}} \left( 1+ \frac{A_{p+1}u^{p+1}}{x^{1/p}} + \dots \right)
$$
We now multiply this by the Taylor expansion of $f(t)$
## Calculate the integrals
We first replace each boundary of form $x^{1/p}\epsilon$ with $\infty$.
This leaves us with integrals of form:
$$
\int_{0}^{\infty} u^{n} e^{-Au^{p}} du = \frac{A^{-(n+1)/p}}{p} \Gamma\left( \frac{n+1}{p} \right)
$$
$$
\int_{-\infty}^{\infty} u^{2m} e^{-Au^{2q}} du = \frac{A^{-(2m+1)/(2q)}}{q} \Gamma\left( \frac{2m+1}{2q} \right)
$$
$$
\int_{-\infty}^{\infty} u^{2m+1} e^{-Au^{2q}}du = 0
$$ 
