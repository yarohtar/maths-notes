Given a string $s$, prefix function $\pi(i)$ is the largest value $k$ such that in substring $s'=s[0,1,\dots i]$ the *proper* prefix and *proper* suffix of length $k$ (i.e. $k\leq i$) are the same. 

# Definition
Largest value $\pi(i)$ s.t.
$s[0,\dots, \pi(i)-1]=s[i-(\pi(i)-1),\dots, i]$

## Example
n string $s=abcabcd$ we have the following:
$\pi(0)=0$ by definition (no *proper* suffix of $a$)
$\pi(1)=0$ because no prefix of $ab$ matches a suffix of $ab$
$\pi(2)=0$ similarly for $abc$
$\pi(3)=1$ because $abca$ has prefix and suffix $a$
$\pi(4)=2$ because $abcab$ has prefix and suffix $ab$
$\pi(5)=3$ $abcabc$ has $abc$
$\pi(6)=0$ $abcabcd$ fails

Trivial algorithm for computing this has time complexity of $O(n^3)$


# Optimizations
## First observation
In each step, the prefix function can increase by at most 1. Thus, when going from $\pi(i)$ to $\pi(i+1)$ we need to check if $s[\pi(i)]=s[i+1]$ ($s[i+1]$ being the "added" character at the end) in which case $\pi(i+1)=\pi(i)+1$. 
## Second observation
In the other case, when $s[\pi(i)]\neq s[i+1]$ we want to find the largest $j<\pi(i)$ such that some prefix matches $s[0,\dots, j-1] = s[i-(j-1),\dots,i]$ AND last char matches $s[j]=s[i+1]$

Note that because $j<\pi(i)$ we certainly have that $s[\pi(i)-j,\dots, \pi(i)-1]=s[i-(j-1),\dots, i]$ by definition of $\pi(i)$ 
(we actually have a stronger statement of $s[0,\dots,\pi(i)-1]=s[i-(\pi(i)-1),\dots,i]$)

So now we are finding the largest $j$ s.t. $s[0,\dots, j-1] = s[\pi(i)-j,\dots, \pi(i)-1]$. This is exactly the definition of $\pi(\pi(i)-1)$. This is certainly precomputed because $\pi(i)\leq i$. We need to check $s[j]=s[i+1]$, if it holds we are done. If it doesn't we just go to $\pi(\pi(\pi(i)-1)-1)$ etc.