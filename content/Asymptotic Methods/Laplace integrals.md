Laplace integrals are of the form:
$$
I(x)=\int_{a}^b f(t)e^{x\phi(t)}dt
$$
where $f$ and $\phi$ are nice enough

Note that [[Asymptotic Methods/Watson's lemma]] deals with the special case $\phi=-t$ 
(and $a=0$, $b=T$, so the endpoint dominates the integral)

To see a systematic way to find an [[Asymptotic Methods/Asymptotic Approximation]]
see [[Asymptotic Methods/Laplace Method]]
We give some examples below:
### Principle of localisation
The [[Asymptotic Methods/Asymptotic Expansion]] of $I$ as $x\to \infty$ is determined by 
contributions from very small regions around the maxima of $\phi$.

### Case monotonic
Suppose $\phi$ is monotonic on $[a,b]$
Let $\phi'(t)>0$ and let $f(b)\neq 0$.
Then the integral is dominated by a nbd of $b$:
Let $u=\phi(t)$ and $t=\phi ^{-1}(u)$
$$
\implies I=\int_{\phi(a)}^{\phi(b)} \frac{f(t)}{\phi'(t)} e^{xu} du
$$
Can use [[Asymptotic Methods/Watson's lemma]] or just use partial integration:
$$
I(x)\sim \frac{f(b)e^{x\phi(b)}}{x\phi'(b)}
$$
If $\phi'(t)<0$ and $f(a)\neq 0$ 
$$
\implies I(x)\sim  \frac{f(a)e^{x\phi(a)}}{x\lvert \phi'(a) \rvert }
$$
### Case one local max
Suppose $\phi$ has one internal maximum at $t=c$ 
(and this is the absolute maximum)
s.t. $\phi'(c)=0$ and $\phi''(c)<0$ and $f(c)\neq 0$.
$$
\begin{gather}
I(x)=\int_{c-\epsilon}^{c+\epsilon}f(t)e^{x\phi(t)}dt+\int_{\Omega_{\epsilon}}f(t)e^{x\phi}dt\\
=I_{1}+I_{2}
\end{gather}
$$
$$
\begin{align}

I_{2} & =\int_{c+\epsilon}^b f(t)e^{ x\phi(t) }dt+\int_{a}^{c-\epsilon}f(t)e^{ x\phi(t) }dt \\
 & =O\left( \frac{1}{x}e^{ x\phi(c+\epsilon) } \right)+O\left( \frac{1}{x}e^{ x\phi(c-\epsilon) } \right)
\end{align}
$$
From the [[Asymptotic Methods/Laplace integrals#Case monotonic]].

Then $I_{2}\ll \frac{e^{ x }\phi(c)}{x}$ by noting that $\phi(c+\epsilon)<\phi(c)$ and $\phi(c-\epsilon)<\phi(c)$

Now Taylor expand $f$ and $\phi$.
$$
\phi(t)=\phi(c) + \frac{1}{2}\phi''(c)(t-c)^{2}+\dots
$$
$$
f(t)=f(c)+O(t-c)
$$

$$
\begin{align}
I_{1} & =\int_{c-\epsilon}^{c+\epsilon}[f(c)+\dots]\exp\left( x\phi(c)+\frac{1}{2}x\phi''(c)(t-c)^2+\dots \right) dt \\
I_{1} & \approx f(c)e^{ x\phi(c) }\int_{c-\epsilon}^{c+\epsilon}e^{ x \phi''(c)(t-c)^{2} / 2}dt \\

\end{align}
$$
Set $s=[-x\phi''(c)]^{1/2}(t-c)$
$$
I_{1}\approx \frac{f(c)e^{ x\phi(c) }}{[-x\phi''(c)]^{1/2}}\int_{-[-x\phi''(c)]^{1/2}\epsilon}^{[-x\phi''(c)]^{1/2}\epsilon}e^{ -s^{2}/2 }ds
$$
Now change limits in the integral 
(later see that the induced error from this is very small):
$$
\begin{align}

I_{1} & \sim \frac{f(c)e^{x\phi(c)}}{[-x\phi''(c)]^{1/2}}\int_{-\infty}^{\infty}e^{ -s^{2}/2 }ds \\

I_{1} & \sim f(c)e^{x\phi(c)} \left( \frac{2\pi}{-x\phi''(c)} \right)^{1/2}
\end{align}
$$
Error induced by changing limits ? 
Recall $\int_{\xi}^{\infty}e^{-t^{2}/2}dt\sim \frac{1}{\xi}e^{-\xi^{2}/2}$ as $\xi\to \infty$
So error $\sim \frac{1}{[-x\phi''(c)]^{1/2}}\exp\left( -\frac{x^{2}\phi''(c)}{\lvert x\phi''(c) \rvert} \right)$
So error is exponentially small

So $I_{1}\gg I_{2}$ so $I\sim I_{1}$

### Example
$$
K_{0}(x)=\int_{0}^{\infty}\exp\left( -t-\frac{x^{2}}{4t} \right)dt
$$
Taking $\phi(t)=-\frac{1}{4t}$ doesn't work because $\phi$ has no internal maxima.

Taking $\psi(t)=-t-\frac{x^{2}}{4t}$ 
we find max at $t=\frac{x}{2}$ 
but this is not good because it depends on $x$.

This motivates substitution $xu=2t$, $xdu=2dt$
So
$$
K_{0}=\frac{x}{2}\int_{0}^{\infty}\exp\left( x\left( -\frac{u}{2}-\frac{1}{2u} \right) \right)du
$$
$\phi(u)=-\frac{u}{2}-\frac{1}{2u}$ with max at $u=1$

$$
K_{0}\sim \frac{\sqrt{ 2\pi x }}{2}e^{ -x }
$$
### Example
If $\phi$ has one internal maximum and the same max at one of the endpoints.
Then the first order term contribution of the internal maximum dominates 
because endpoint $\sim \frac{e^{x\phi(b)}}{x}$ while internal is $\sim \frac{e^{x\phi(c)}}{\sqrt{ x }}$.

### Example
If $\phi$ has many internal local maxima, 
then only the absolute max matters. 
For multiple absolute maximums, we just add them up.

### Example
If $\phi$ has an absolute AND a local maximum at an endpoint, 
the contribution is now 
$$
\sim\frac{1}{2} \frac{f(b)e^{ x\phi(b) }}{[-x\phi''(b)]^{1/2}} \sqrt{ 2\pi }
$$
(this is done by doing the same manipulation as in [[Asymptotic Methods/Laplace integrals#Case one max]] 
but the last integral is from $-\infty$ to $0$)

### "Wide" maximum
Suppose 
$$
\phi'(c)=\phi''(c)=\dots=\phi^{(p-1)}(c)=0
$$
but $\phi^{(p)}(c)\neq 0$

Proceed as in previous case but get:

$$
I\sim \int_{c-\epsilon}^{c+\epsilon}f(t) e^{ x\phi(c) } e^{ x\phi^{(p)}(c) } \frac{(t-c)^{p}}{p!}
$$
Let $s=\left[ -\frac{x\phi^{(p)}(c)}{p!} \right]^{1/p}(t-c)$
$$
I\sim \frac{(p!)^{1/p}}{[-x\phi^{(p)}(c)]^{1/p}}f(c)e^{ x\phi(c) }\int_{-\infty}^{\infty}e^{-s ^{p}}ds
$$
But the integral is just $\Gamma\left( 1+\frac{1}{p} \right)$ so 
$$
I\sim 2\frac{(p!)^{1/p}}{[-x\phi^{(p)}(c)]^{1/p}}f(c)e^{ x\phi(c) }\Gamma\left( 1+\frac{1}{p} \right)
$$
(the $2$ came from integrating only from $0$ to $\infty$)

### Higher order terms?
Plug in longer Taylor expansions .... 
wasn't done in lectures, see 
https://www.vle.cam.ac.uk/pluginfile.php/28347540/mod_resource/content/1/am_notes.pdf
Section 3.4.4

If $f(c)=0$ then we NEED higher order terms
